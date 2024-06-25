import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Learn</h2>
      <button onMouseDown={() => setCount(count + 1)}>+</button>
      <button>{count}</button>
      <button onMouseDown={() => setCount(count - 1)}>-</button>
      <p>Docs</p>
      <div>information</div>
    </main>
  );
}
