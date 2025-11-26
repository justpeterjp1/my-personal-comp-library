import { useState, useEffect} from "react";
import { Sun, Moon } from "lucide-react";


export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
);

useEffect(() => {
    if(theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
}, [theme])

const themeToggle = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
}

    return (
      <div>
      <button
        onClick={themeToggle}
        className="p-2 flex items-center space-x-2" // Added flex for better layout
        aria-label={`Toggle to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? (
          <>
            <span className="flex gap-2 p-1 px-2 rounded-lg bg-gray-50 text-gray-500">light<Sun className="h-5 w-5 text-yellow-500" /></span>
            
          </>
        ) : (
          <>
            <span className="flex gap-2 p-1 px-2 bg-gray-400 text-white rounded-lg">dark<Moon className="h-5 w-5 text-gray-900 " /></span>
            
          </>
        )}
      </button>
    </div>

    )
};