import clsx from "clsx";
import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={clsx("h-full bg-blue-200", { "overflow-scroll": enabled })}>
      <button
        className="absolute w-40 p-4 bg-white rounded shadow top-2 right-2"
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? "Disable scrolling" : "Enable scrolling"}
      </button>

      <div className="w-10 bg-green-300 h-2/3"></div>
      <div className="w-10 bg-green-500 h-2/3"></div>
    </div>
  );
}

export default App;
