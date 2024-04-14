import { useState } from "react";
import "./index.css";

function App() {
  let [count, setCount] = useState(0);

  const add = () => {
    setCount((count = count + 1));
  };

  const decrease = () => {
    setCount((count = count - 1));
  };

  const reset = () => {
    setCount((count = 0));
  };

  return (
    <div className="w-screen h-screen bg-slate-100">
      <center className="p-10 font-bold text-violet-950 text-8xl ">
        Counter
      </center>
      <div className="grid place-items-center">
        <div className="px-16 py-5 text-center text-red-800 bg-white border-2 rounded-lg shadow-xl text-9xl border-slate-400">
          {count}
        </div>
        <div className="flex gap-8 bg-white border-2 border-slate-400 p-14 m-14 rounded-xl">
          <button
            onClick={add}
            className="px-4 py-2 font-bold text-white rounded shadow-lg bg-lime-800 shadow-lime-800/80 hover:bg-slate-800 active:bg-black">
            Add Count
          </button>
          <button
            onClick={decrease}
            className="px-4 py-2 font-bold text-white bg-orange-800 rounded shadow-lg shadow-orange-800/80 hover:bg-red-950 active:bg-black">
            Decrease Count
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 font-bold text-white rounded shadow-lg bg-violet-800 shadow-violet-800/80 hover:bg-violet-950 active:bg-black">
            Reset Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
