import fs from "fs";
import path from "path";
import crypto from "crypto";
import { pipeline } from "stream/promises";

const IGNORES = new Set(["node_modules", ".git", ".next", "dist", "build"]);

async function* walk(dir: string): AsyncGenerator<string> {
  for (const name of await fs.promises.readdir(dir)) {
    if (IGNORES.has(name)) continue;
    const full = path.join(dir, name);
    const stat = await fs.promises.stat(full);
    if (stat.isDirectory()) {
      yield* walk(full);
    } else if (stat.isFile()) {
      yield full;
    }
  }
}

async function hashFile(filePath: string): Promise<string> {
  const hash = crypto.createHash("sha256");
  const rs = fs.createReadStream(filePath);
  await pipeline(rs, hash);
  return hash.digest("hex");
}

async function findDuplicates(root: string) {
  const map = new Map<string, string[]>();
  for await (const file of walk(root)) {
    try {
      const h = await hashFile(file);
      const arr = map.get(h) ?? [];
      arr.push(file);
      map.set(h, arr);
    } catch (e) {
      // skip unreadable files
    }
  }

  const groups = [...map.entries()].filter(([, files]) => files.length > 1);
  if (groups.length === 0) {
    console.log("No duplicate file contents found.");
    return;
  }

  console.log(`Found ${groups.length} duplicate group(s):\n`);
  for (const [hash, files] of groups) {
    console.log(`Hash: ${hash}`);
    for (const f of files) {
      console.log(`  - ${f}`);
    }
    console.log("");
  }
}

async function main() {
  const arg = process.argv[2] ?? path.join(__dirname, ".."); // default to project root
  const root = path.resolve(arg);
  if (!fs.existsSync(root)) {
    console.error("Path does not exist:", root);
    process.exit(1);
  }
  console.log("Scanning:", root);
  await findDuplicates(root);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
