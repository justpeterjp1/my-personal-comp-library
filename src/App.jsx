import { useState } from "react";
import Home from "./components/Home";
import Components from "./components/Components";
import ButtonsPage from "./micro-components/ButtonsPage";
import Header from "./components/Header";

export default function App() {
  const [currentView, setCurrentView] = useState("initial");

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[var(--primary)] text-[var(--color)]">
      <Header />
      {currentView === "initial" && (
        <Home goTo={setCurrentView} />
      )}

      {currentView === "components" && (
        <Components goBack={() => setCurrentView("initial")} />
      )}

      {currentView === "buttons" && (
        <ButtonsPage goBack={() => setCurrentView("initial")} />
      )}
    </div>
  );
}
