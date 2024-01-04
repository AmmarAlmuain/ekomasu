import Inventory from "@/components/Icons/Inventory";
import Item from "./Item";
import Magnifying from "@/components/Icons/Magnifying";
import Send from "@/components/Icons/Send";
import Security from "@/components/Icons/security";

export default function Service() {
  return (
    <>
      <section>
        <h2 className="text-primary text-2xl pt-6 pb-8 font-semibold">
          Our extra services
        </h2>
        <div className="flex justify-between gap-y-8 items-start flex-wrap">
          <Item
            src="https://media.discordapp.net/attachments/1025486564165427353/1192371622166937700/image.png?ex=65a8d59b&is=6596609b&hm=3f62f4d8e0133a2795231a6ba2a0833a2a142e41bd219797488567d4e4049fb0&=&format=webp&quality=lossless&width=700&height=300"
            icon={<Magnifying />}
            title="Source from Industry Hubs"
          />
          <Item
            src="https://media.discordapp.net/attachments/1025486564165427353/1192376527841677372/image.png?ex=65a8da2d&is=6596652d&hm=d58fdf46138a84982eb305502cd9f86722d528cbc12180521dd05ba61777b3bd&=&format=webp&quality=lossless&width=700&height=300"
            icon={<Inventory />}
            title="Customize Your Products"
          />
          <Item
            src="https://media.discordapp.net/attachments/1025486564165427353/1192376820897693696/image.png?ex=65a8da73&is=65966573&hm=2a023a0e741f43efd7bcc9f6006a9b8ebb3282987847d919a86031bdd2f10ad9&=&format=webp&quality=lossless&width=700&height=300"
            icon={<Send />}
            title="Fast, reliable shipping by ocean or air"
          />
          <Item
            src="https://media.discordapp.net/attachments/1025486564165427353/1192376859648864376/image.png?ex=65a8da7c&is=6596657c&hm=23332bdea31c1d29fa811e2f837c5d35c231f788a77ea51051c2bebd80096884&=&format=webp&quality=lossless&width=700&height=300"
            icon={<Security />}
            title="Product monitoring and inspection"
          />
        </div>
      </section>
    </>
  );
}
