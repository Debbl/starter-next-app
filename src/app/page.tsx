"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex h-screen items-center justify-center">
      <div
        className="cursor-pointer select-none font-bold text-green-300"
        onClick={() => setCount(count + 1)}
      >
        Hi {count}
      </div>
    </main>
  );
}
