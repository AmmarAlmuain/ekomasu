import Block from "@/components/Home/Block/Block";
import Main from "@/components/Home/Main/Main";
import Sale from "@/components/Home/Sale/Sale";
import { block } from "@/data/block.data";

export default function Home() {
  return (
    <main className="flex flex-col my-4 gap-y-4 shrink-sides">
      <Main />
      <Sale />
      <Block
        text="Home and outdoor"
        items={block["1"]}
        src="https://media.discordapp.net/attachments/1025486564165427353/1191400858106200205/image.png?ex=65a54d83&is=6592d883&hm=62768086264da8a25d7413d03b566bd7bae1f961456f7b9bb4a35ad08d3f59b4&=&format=webp&quality=lossless&width=700&height=642"
      />
      <Block
        text="Consumer electronics and gadgets"
        items={block["2"]}
        src="https://media.discordapp.net/attachments/1025486564165427353/1191460828281581648/image.png?ex=65a5855d&is=6593105d&hm=4025a399033771eb06fb94355adf72a7b2439c1cff59d1c496847c50a999e5d9&=&format=webp&quality=lossless&width=700&height=642"
      />
    </main>
  );
}
