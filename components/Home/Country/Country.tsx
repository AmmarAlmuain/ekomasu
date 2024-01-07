import Item from "./Item";
import { country } from "@/data/country";

export default function Country() {
  return (
    <>
      <section className="max-xl:bg-white max-xl:border-2 max-xl:border-color max-xl:p-4">
        <h2 className="text-primary text-2xl max-xl:pb-6 max-xl:pt-0 pt-6 pb-8 font-semibold">
          Suppliers by region
        </h2>
        <div className="flex justify-center gap-y-8 items-start flex-wrap">
          {country["1"].map((item) => {
            return (
              <Item
                key={item.name}
                flag={item.flag}
                name={item.name}
                domain={item.domain}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
