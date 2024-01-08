/* eslint-disable @next/next/no-img-element */
import React from "react";
import DArrow from "../Icons/DArrow";

function Item({ src }: { src: string }) {
  return (
    <div className="flex justify-between h-[136px] border-b border-color">
      <div className="flex gap-x-4">
        <div className="h-20 bg-[#F7F7F7] w-20 border-2 -center p-2 border-color rounded-md">
          <img src={src} alt="cart product image" className="w-16 h-16" />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="font-medium text-primary">
            T-shirts with multiple colors, for men and lady.
          </p>
          <p className="max-w-[340px] text-secondary">
            Size: medium, Color: blue, Material: Plastic Seller: Artel Market
          </p>
          <div className="flex gap-x-2 mt-1">
            <button className="border-2 border-color text-[13px] h-[30px] font-medium px-2 text-[#FA3434] rounded ">
              Remove
            </button>
            <button className="border-2 border-color text-[13px] h-[30px] font-medium-300 px-2 text-third rounded">
              Save for Later
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-end flex-col gap-y-2">
        <p className="font-medium text-primary mt-0.5">$248</p>
        <button
          type="button"
          className="h-10 w-[125px] border-2 border-color rounded-md items-center px-2 flex justify-between"
        >
          <span className="text-primary">Qty: 9</span>
          <DArrow />
        </button>
      </div>
    </div>
  );
}

export default Item;
