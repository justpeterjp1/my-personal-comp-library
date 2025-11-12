import React from "react";

const Buttons = ({openButtons, onClick}) => {



 return (
    <div className="flex items-center gap-12  md:gap-24">
        {!openButtons && (
        <>
          <button
            onClick={onClick}
            className="bg-red-500 py-2 px-4 m-auto text-white rounded-lg hover:bg-red-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500"
          >
            Click me 
          </button>
          <button className="bg-green-500 py-2 px-4 m-auto text-white rounded-lg hover:bg-green-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500">
            Click me 
          </button>
        </>
      )}

        {openButtons && <section>
            <h1>A collection of buttons</h1>
            <button 
                onClick={onClick}
                className="bg-green-500 py-2 px-4 m-auto text-white rounded-lg hover:bg-green-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500">
            Click me
        </button>
            </section>}
    </div>
 )
}

export default Buttons