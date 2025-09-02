import { useState } from 'react';
import FirstPage from '../Components/FirstPage/FirstPage.jsx';


function App() {

  return (
    <>
      <main class="relative w-full h-full flex justify-center items-center">
        <div class="absolute -top-120 -right-120 h-64 w-64 bg-[#fff6b8] rounded-[55%_70%_45%_65%]"></div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <FirstPage />
        </div>
        <div class="absolute -bottom-120 -left-120 h-64 w-64 bg-[#dfeaff] rounded-[65%_45%_70%_55%]"></div>
      </main>


    </>
  );
}

export default App;
