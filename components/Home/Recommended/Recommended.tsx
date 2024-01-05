import { recommended } from "@/data/recommended";
import Item from "./Item";

export default function Recommended() {
  return (
    <>
      <section className="flex max-xl:p-4 max-xl:bg-white max-xl:border-2 max-xl:border-color justify-between items-start flex-col">
        <h2 className="text-primary text-2xl max-xl:pb-6 max-xl:pt-0 pt-6 pb-8 font-semibold">
          Recommended items
        </h2>
        <div className="flex justify-between gap-y-8 max-xl:full max-xl:gap-4 items-start flex-wrap">
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
