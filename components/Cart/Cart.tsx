/* eslint-disable @next/next/no-img-element */
import React from "react";
import Item from "./Item";
import Coupon from "./Coupon";
import SAside from "./SAside";
import RItem from "./RItem";
import Message from "../Icons/Message";
import Lock from "../Icons/Lock";
import Truck from "../Icons/Truck";

function Cart() {
  return (
    <div className="-center-col gap-y-8 full">
      <h2 className="w-full font-semibold text-2xl text-primary">My Cart(3)</h2>
      <div className="flex gap-4 w-full justify-between">
        <div className="bg-white w-full p-4 gap-y-4 flex flex-col max-w-full border-2 border-color rounded-md">
          <Item src="https://media.discordapp.net/attachments/1025486564165427353/1193536313924780152/image.png?ex=65ad1250&is=659a9d50&hm=4893a5c44023726d0c5837c7ba6f8b287f6781f2680f1b18d4c12305dd8e79a2&=&format=webp&quality=lossless&width=132&height=151" />
          <Item src="https://media.discordapp.net/attachments/1025486564165427353/1193538268394963035/image-removebg-preview.png?ex=65ad1422&is=659a9f22&hm=8a756f3d3799ca04ed6ded876d9d2092140c70d84202fc890baaf0e111d2304e&=&format=webp&quality=lossless&width=152&height=152" />
          <Item src="https://media.discordapp.net/attachments/1025486564165427353/1193538467909603409/image-removebg-preview_2.png?ex=65ad1451&is=659a9f51&hm=cf2bac73f7caf6f0129ef626c7936fa4544d1643212c4db7183e11ff089eb5f5&=&format=webp&quality=lossless&width=160&height=160" />
          <div className=" flex gap-64 justify-between">
            <button className="bg-third h-[40px] px-6 -center text-white rounded">
              Back to shop
            </button>
            <button className="text-third h-[40px] px-6 -center border-2 border-color bg-white rounded-md">
              Remove All
            </button>
          </div>
        </div>
        <div className="w-full max-w-[280px]">
          <Coupon />
          <SAside />
        </div>
      </div>
      <div className="flex justify-start w-full gap-x-16">
        <div className="flex gap-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 -center">
            <Lock />
          </div>
          <p>
            <span className="font-bold text-primary block">Secure payment</span>
            Have you ever finally just
          </p>
        </div>
        <div className="flex gap-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 -center">
            <Message />
          </div>
          <p>
            <span className="font-bold text-primary block">
              Customer support
            </span>
            Have you ever finally just
          </p>
        </div>
        <div className="flex gap-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 -center">
            <Truck />
          </div>
          <p>
            <span className="font-bold text-primary block">
              Customer support
            </span>{" "}
            Free delivery Have you ever finally just
          </p>
        </div>
      </div>
      <div className="px-4 py-6 bg-white w-full border-2 border-color rounded-md flex flex-col gap-y-4">
        <h2 className="font-bold text-primary text-xl">Saved for later</h2>
        <div className=" flex gap-6 justify-center m-auto ">
          <RItem
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1192543718855692338/image.png?ex=65a975e2&is=659700e2&hm=44fde9584c2ed54cbe5f63eead67e40d1c1b70fad5ca118556ecb5bfff1f6645&"
            price={92.8}
            description="GoPro HERO6 4K Action Camera - Black"
          />
          <RItem
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1193266092060184596/image.png?ex=65ac16a6&is=6599a1a6&hm=3b4dd731faed20c77b3b31316da627cafb4bb579812523ceceb547f6bf03e755&"
            price={92.8}
            description="GoPro HERO6 4K Action Camera - Black"
          />
          <RItem
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1193277077856714853/image.png?ex=65ac20e1&is=6599abe1&hm=4792aac005100edfb64a6bc38af86068b8d3b505fa1ddc2649a6e36478ee2b1c&"
            price={92.8}
            description="GoPro HERO6 4K Action Camera - Black"
          />
          <RItem
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1193266111119110185/image.png?ex=65ac16aa&is=6599a1aa&hm=0e9a342c76cb33f1da511f14f09c1c07fabe98c51bcf9dffafb5f8cfa2e2b2c2&"
            price={92.8}
            description="GoPro HERO6 4K Action Camera - Black"
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
