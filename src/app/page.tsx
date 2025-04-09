import { ThemeSwitcher } from "~/components/ThemeSwitcher";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-y-4">
      <motion.div
        className="size-16 rounded-md border bg-blue-600"
        whileHover={{ scale: 1.1, rotate: "360deg" }}
      />
      <Counter />

      <ThemeSwitcher />
    </main>
  );
}
