import Buttons from "./ButtonsPage";

export default function ButtonsPage({ goBack }) {
  return (
    <div className="w-full p-4">
      <button onClick={goBack} className="mb-4 p-2 bg-gray-500 text-white rounded">
        ← Go Back
      </button>

      <Buttons />
    </div>
  );
}
