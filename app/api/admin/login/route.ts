import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (
  email.trim().toLowerCase() === process.env.ADMIN_EMAIL?.trim().toLowerCase() &&
  password.trim() === process.env.ADMIN_PASSWORD?.trim()
) {
    const res = NextResponse.json({ success: true });

    console.log("ENV:", process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);
console.log("INPUT:", email, password);
    // cookie
    res.cookies.set("admin_token", "authorized", {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
