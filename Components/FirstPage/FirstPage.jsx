export default function FirstPage() {

  function getQuestions() {
    const firstPageEl = document.getElementById('first-page');
    firstPageEl.classList.add('hidden');

    return (
      <>

      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center" id="first-page">
        <h1 className="text-[2rem] text-[var(--color-main)] font-bold">Quizzical</h1>
        <p className="text-[1rem] text-[var(--color-main)] mb-6">Lightweight trivia game</p>
        <button className="bg-[var(--bg-main-btn)] text-[var(--color-main-btn)] py-2 px-12 rounded-xl" onClick={() => getQuestions()}>Start quiz</button>
      </div>
      <div id="questions" className="flex flex-col justify-between items-between h-screen">
        <div>
          <p className="text-[var(--color-main)] font-bold text-base mb-2">How would one say goodbye in Spanish?</p>
          <div className="flex justify-center items-center gap-4 mb-4">
            <button className="text-[0.8rem] border-1 border-[var(--color-main)] rounded-md  px-4 hover:bg-[#d6dbf5] active:[#d6dbf5]">Adiós</button>
            <button className="text-[0.8rem] border-1 border-[var(--color-main)] rounded-md  px-4 hover:bg-[#d6dbf5] active:[#d6dbf5]">Hola</button>
            <button className="text-[0.8rem] border-1 border-[var(--color-main)] rounded-md  px-4 hover:bg-[#d6dbf5] active:[#d6dbf5]">Au Revoir</button>
            <button className="text-[0.8rem] border-1 border-[var(--color-main)] rounded-md  px-4 hover:bg-[#d6dbf5] active:[#d6dbf5]">Salir</button>
          </div>
          <hr></hr>
        </div>
        <div>
          <p>How would one say goodbye in Spanish?</p>
          <div className="flex justify-center items-center gap-4">
            <button>Adios</button>
            <button>Hola</button>
            <button>Au Revoir</button>
            <button>Salir</button>
          </div>
          <hr></hr>
        </div>
        <div>
          <p>How would one say goodbye in Spanish?</p>
          <div className="flex justify-center items-center gap-4">
            <button>Adios</button>
            <button>Hola</button>
            <button>Au Revoir</button>
            <button>Salir</button>
          </div>
          <hr></hr>
        </div>
        <div>
          <p>How would one say goodbye in Spanish?</p>
          <div className="flex justify-center items-center gap-4">
            <button>Adios</button>
            <button>Hola</button>
            <button>Au Revoir</button>
            <button>Salir</button>
          </div>
          <hr></hr>
        </div>
        <div>
          <p>How would one say goodbye in Spanish?</p>
          <div className="flex justify-center items-center gap-4">
            <button>Adios</button>
            <button>Hola</button>
            <button>Au Revoir</button>
            <button>Salir</button>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}