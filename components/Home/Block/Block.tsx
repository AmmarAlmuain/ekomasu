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
      <section className="border-border flex border-2 bg-white rounded-md overflow-hidden">
        <LSide src={src} text={text} />
        <div className="flex flex-wrap">
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
