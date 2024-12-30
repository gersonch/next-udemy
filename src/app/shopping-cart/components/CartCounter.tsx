"use client";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-slate-950 px-4 py2 cursor-pointer text-gray-100 hover:bg-slate-900 transition-all"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-slate-950 px-4 py2 cursor-pointer text-gray-100 hover:bg-slate-900 transition-all"
        >
          -1
        </button>
      </div>
    </>
  );
};
