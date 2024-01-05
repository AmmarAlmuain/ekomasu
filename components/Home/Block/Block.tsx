import Item from "./Item";
import LSide from "./LSide";

export default function Block({
  items,
  src,
  text,
}: {
  items: { src: string; name: string; price: number }[];
  src: string;
  text: string;
}) {
  return (
    <>
      <section className="border-border max-xl:flex-col max-xl:p-4 flex border-2 max-xl:rounded-none max-xl:justify-between bg-white rounded-md overflow-hidden">
        <h2 className="text-primary text-2xl pb-6 hidden max-xl:flex font-semibold">
          {text}
        </h2>
        <div className="max-xl:hidden">
          <LSide src={src} text={text} />
        </div>
        <div className="flex flex-wrap max-xl:gap-4">
          {items
            .slice(0, 4)
            .map((item: { src: string; name: string; price: number }) => {
              return (
                <Item
                  key={item.name}
                  price={item.price}
                  name={item.name}
                  BBorder={true}
                  LBorder={true}
                  src={item.src}
                />
              );
            })}
          {items
            .slice(4, 8)
            .map((item: { src: string; name: string; price: number }) => {
              return (
                <Item
                  key={item.name}
                  price={item.price}
                  name={item.name}
                  BBorder={false}
                  LBorder={true}
                  src={item.src}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}
