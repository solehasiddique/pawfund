export default function ThankYouPage() {
  const gifs = [
    "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    "https://media.giphy.com/media/26xBsEO9D5HFGD4Lu/giphy.gif",
    "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif",
  ];
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FFF2E8] text-center px-6">
      <img src={randomGif} alt="Thank you dog" className="w-64 rounded-xl mb-6" />
      <h1 className="text-3xl font-bold text-orangeBrand mb-3">Thank You! 💖</h1>
      <p className="text-brownText text-lg max-w-md">
        Your kindness is making tails wag and hearts happy. 🐾
      </p>
    </main>
  );
}
