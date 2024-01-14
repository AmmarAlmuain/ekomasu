/* eslint-disable @next/next/no-img-element */
import React from "react";
import Item from "./Item";
import Coupon from "./Coupon";
import Checkout from "./Checkout";
import Message from "../../Icons/Message";
import Lock from "../../Icons/Lock";
import Truck from "../../Icons/Truck";

export default function Main() {
  return (
    <div className="-center-col gap-y-8 full">
      <h2 className="w-full font-semibold text-2xl text-primary px-4">
        My Cart(3)
      </h2>
      <div className="flex gap-4 w-full max-md:flex-col justify-between max-xl:p-4 max-sm:p-0 max-sm:border-0  max-xl:border-2 max-xl:border-color max-xl:bg-white max-xl:rounded-none max-xl:justify-between">
        <div className="bg-white w-full p-4 max-sm:p-0 gap-y-4 flex flex-col max-w-full max-sm:border-0 max-sm:border-t-2 max-sm:pt-4 border-2 border-color rounded-md">
          <Item src="https://media.discordapp.net/attachments/1025486564165427353/1193536313924780152/image.png?ex=65ad1250&is=659a9d50&hm=4893a5c44023726d0c5837c7ba6f8b287f6781f2680f1b18d4c12305dd8e79a2&=&format=webp&quality=lossless&width=132&height=151" />
          <Item src="https://media.discordapp.net/attachments/1025486564165427353/1193538268394963035/image-removebg-preview.png?ex=65ad1422&is=659a9f22&hm=8a756f3d3799ca04ed6ded876d9d2092140c70d84202fc890baaf0e111d2304e&=&format=webp&quality=lossless&width=152&height=152" />
          <Item src="https://media.discordapp.net/attachments/1025486564165427353/1193538467909603409/image-removebg-preview_2.png?ex=65ad1451&is=659a9f51&hm=cf2bac73f7caf6f0129ef626c7936fa4544d1643212c4db7183e11ff089eb5f5&=&format=webp&quality=lossless&width=160&height=160" />
          <div className=" flex gap-64 justify-between max-sm:hidden">
            <button className="bg-third min-w-40 h-[40px] px-6 -center text-white rounded">
              Back to shop
            </button>
            <button className="text-third min-w-36 h-[40px] px-6 -center border-2 border-color bg-white rounded-md">
              Remove All
            </button>
          </div>
        </div>
        <div className="w-full max-w-[280px] max-md:max-w-full">
          <Coupon />
          <Checkout />
        </div>
      </div>
      <div className="flex justify-start w-full max-xl:justify-center gap-x-16 max-lg:hidden">
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
            </span>
            Free delivery Have you ever finally just
          </p>
        </div>
      </div>
    </div>
  );
}
