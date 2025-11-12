import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx';

function App() {

const [openButtons, setOpenButtons] = useState(false);
function openButtonSection () {
    setOpenButtons(prev => !prev)
   
}
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-y-4 bg-gray-100'>
    {!openButtons && <div  className="flex flex-col p-4  md:w-1/2 gap-8 text-xl transition-all duration-500 ease-in-out opacity-100">
      <h1 className="w-full text-xl ">
         <span className='text-2xl'>Hi there!!!</span> Of course you already have questions as to 
      why there are only two buttons on this page
      </h1>
      <h2>
        Well it is simple - Choose the correct button and you'll win a million dollars
      </h2>
      <p>
        Just kidding!!! One button will show a collection of buttons which are just Buttons while the 
        Other button will show you a another collection of buttons 
      </p>
      <p>But each button in this section will show you an individual component</p>
    <div>

    </div>
    </div>}
    <div className='flex justify-between'>
    <Buttons 
    onClick={openButtonSection}
    openButtons={openButtons}
     />

    </div>
    </div>
  )
}

export default App
