import ThemeToggle from "../micro-components/ThemeToggle";

export default function Home({ goTo }) {
  return (
    <>
      <div className="flex flex-col p-4 md:w-1/2 gap-8 text-xl">
        <h1 className="w-full text-xl">
          <span className="text-2xl">Hi there!!!</span>  
                  </h1>
        
      </div>

      <div className='flex justify-between gap-4'>
        <button
          onClick={() => goTo("buttons")}
          className="bg-red-500 py-2 px-4 text-white rounded-lg"
        >
          Buttons
        </button>

        <button
          onClick={() => goTo("components")}
          className="bg-green-500 py-2 px-4 text-white rounded-lg"
        >
          Components
        </button>

        <ThemeToggle />
      </div>
    </>
  );
}
