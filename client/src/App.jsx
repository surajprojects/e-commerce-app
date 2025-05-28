import "./App.css"
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-red-500 text-5xl font-bold underline">
          Is Tailwind working now? 🐯
        </h1>
      </div>
    </>
  );
};

export default App;