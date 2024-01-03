import { recommended } from "@/data/recommended";
import Item from "./Item";

export default function Recommended() {
  return (
    <>
      <section className="flex justify-between items-start flex-col">
        <h2 className="text-primary text-2xl pt-6 pb-8 font-semibold">
          Recommended items
        </h2>
        <div className="flex justify-between gap-y-8 items-start flex-wrap">
          {recommended["1"].map((item) => {
            return (
              <>
                <Item price={item.price} title={item.title} src={item.src} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
