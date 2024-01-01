import Main from "@/components/Home/Main/Main";
import Sale from "@/components/Home/Sale/Sale";

export default function Home() {
  return (
    <main className="flex flex-col my-4 gap-y-4 shrink-sides">
      <Main />
      <Sale />
    </main>
  );
}
