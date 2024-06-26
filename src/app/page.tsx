"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex h-screen items-center justify-center">
      <Button onClick={() => setCount(count + 1)}>Hi {count}</Button>
    </main>
  );
}
