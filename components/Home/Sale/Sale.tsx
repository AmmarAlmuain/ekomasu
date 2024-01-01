import Offers from "./Offers";
import Item from "./Item";

export default function Sale() {
  return (
    <>
      <section className="flex border-color h-full mt-4 justify-center items-center gap-x-4 border-2 bg-white rounded-md">
        <div className="w-full min-h-72 flex justify-center item-center">
          <Offers />
          <div className="w-full flex">
            <Item
              src="https://media.discordapp.net/attachments/1025486564165427353/1191320173026746408/image.png?ex=65a5025e&is=65928d5e&hm=3ab6d54e62445f2b0493cbba9ea783cbc13dd4ab3ff4f7dae4f096c7d0914e4b&=&format=webp&quality=lossless&width=255&height=303"
              name="Smart watches"
              discount={25}
            />
            <Item
              src="https://media.discordapp.net/attachments/1025486564165427353/1191126979777409105/image.png?ex=65a44e72&is=6591d972&hm=7844608d02faec140592a5df8d62fe8d9e4197308d3861077ba901b08e87d94f&=&format=webp&quality=lossless&width=317&height=250"
              name="Laptops"
              discount={15}
            />
            <Item
              src="https://media.discordapp.net/attachments/1025486564165427353/1191336984124338286/image.png?ex=65a51206&is=65929d06&hm=0b2af56f678d3e1244781cd3747288e27864ff74bd93320fccda547ba2f73dfb&=&format=webp&quality=lossless&width=325&height=230"
              name="GoPro cameras"
              discount={40}
            />
            <Item
              src="https://media.discordapp.net/attachments/1025486564165427353/1191337295236833300/image.png?ex=65a51251&is=65929d51&hm=aefe0c45acbd144baba741c8aac7f3fd4d14dbbe29af567f58e88a762c4ee4dd&=&format=webp&quality=lossless&width=282&height=321"
              name="Headphones"
              discount={25}
            />
            <Item
              src="https://media.discordapp.net/attachments/1025486564165427353/1191337384336424970/image.png?ex=65a51266&is=65929d66&hm=d3412b022f1d96885ba7d3feb89c902cb370197b34522669f66d919f2b67cfd5&=&format=webp&quality=lossless&width=313&height=313"
              name="Canon camreras"
              discount={25}
            />
          </div>
        </div>
      </section>
    </>
  );
}
