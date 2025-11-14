import { useState } from 'react';
import './App.css';
import Buttons from './micro-components/Buttons.jsx'; // Now used for the collection view
import ThemeToggle from './micro-components/ThemeToggle.jsx';
import Components from './components/Components.jsx';

function App() {
  // 1. SIMPLIFIED STATE: Use only one state, 'currentView', for navigation.
  const [currentView, setCurrentView] = useState("initial");
  
  // 2. STATE HANDLERS: Use clear names and single functions.
  // The duplicate functions are removed.
  const openComponentSection = () => setCurrentView('components');
  const openButtonSection = () => setCurrentView('buttons');
  const goHome = () => setCurrentView("initial");

  // Helper component for the Back Button
  const BackButton = () => (
    <button onClick={goHome} className='mb-4 p-2 bg-gray-500 text-white rounded'>
      ← Go Back
    </button>
  );

  return (
    <div className='flex flex-col h-screen items-center justify-center gap-y-4 bg-[var(--primary)] text-[var(--color)]'>
      
      {/* 🌟 A. INITIAL VIEW BLOCK: Renders ONLY when currentView is 'initial' */}
      {currentView === "initial" && (
        <>
          {/* Text Block */}
          <div className="flex flex-col p-4 md:w-1/2 gap-8 text-xl transition-all duration-500 ease-in-out opacity-100">
            <h1 className="w-full text-xl ">
              <span className='text-2xl'>Hi there!!!</span> Of course you already have questions as to 
              why there are only two buttons on this page
            </h1>
            {/* ... rest of your text content ... */}
            <p>But each button in this section will show you an individual component</p>
          </div>
          
          {/* Button Selectors (Placed directly here, using the correct handlers) */}
          <div className='flex justify-between gap-4'>
            <button
              onClick={openButtonSection} // Sets view to 'buttons'
              className="bg-red-500 py-2 px-4 m-auto text-white rounded-lg hover:bg-red-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500"
            >
              Click me 
            </button>
            <button 
              onClick={openComponentSection} // Sets view to 'components'
              className="bg-green-500 py-2 px-4 m-auto text-white rounded-lg hover:bg-green-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
            >
              Click me 
            </button>
            <ThemeToggle />
          </div>
        </>
      )}

      {/* 🌟 B. COMPONENTS VIEW BLOCK: Renders ONLY when currentView is 'components' */}
      {currentView === "components" && (
        <div className='w-full p-4'>
          <BackButton />
          <Components />
        </div>
      )}

      {/* 🌟 C. BUTTONS COLLECTION VIEW BLOCK: Renders ONLY when currentView is 'buttons' */}
      {currentView === "buttons" && (
        <div className='w-full p-4'>
          <BackButton />
          
          <Buttons /> 
        </div>
      )}
    </div>
  );
}

export default App;