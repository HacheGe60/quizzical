export default function FirstPage() {
  return (
    <>
      <h1 className="text-[2rem] text-[var(--color-title)] font-bold">Quizzical</h1>
      <p className="text-[1rem] text-[var(--color-title)] mb-6">Lightweight trivia game</p>
      <button className="bg-[var(--bg-main-btn)] text-[var(--color-main-btn)] py-2 px-12 rounded-xl">Start quiz</button>
    </>
  );
}