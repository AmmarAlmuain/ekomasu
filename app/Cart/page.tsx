import Main from "@/components/Cart/Main/Main";
import Recommended from "@/components/Cart/Recommended/Recommended";

export default function page() {
  return (
    <section className="py-8 flex flex-col gap-y-8">
      <Main />
      <Recommended />
    </section>
  );
}
