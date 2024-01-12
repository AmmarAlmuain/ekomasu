/* eslint-disable @next/next/no-img-element */
import React from "react";
import DArrow from "../../Icons/DArrow";

export default function Item({ src }: { src: string }) {
  return (
    <div className="flex justify-between h-full pb-4 min-h-[136px] max-sm:gap-y-4 max-sm:px-4 max-sm:flex-col max-sm:border-b-2 border-b border-color">
      <div className="flex gap-x-4">
        <div className="h-20 bg-[#F7F7F7] min-h-20 min-w-20 w-20 border-2 -center p-2 border-color rounded-md">
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
      <div className="flex items-end flex-col gap-y-2 max-sm:flex-row-reverse max-sm:flex max-sm:justify-between max-sm:items-center">
        <p className="font-medium text-primary mt-0.5">$248</p>
        <button
          type="button"
          className="h-10 max-sm:hidden w-[125px] border-2 border-color rounded-md items-center px-2 flex justify-between"
        >
          <span className="text-primary">Qty: 9</span>
          <DArrow />
        </button>
        <div className="w-40 max-sm:flex hidden bg-white border-2 border-color justify-between rounded-md">
          <button className="w-10 h-10 -center border-r-2 border-color">
            <Minus />
          </button>
          <span className="w-[70px] -center h-10"> 2 </span>
          <button className="w-10 h-10 -center border-l-2 border-color">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <>
      <svg
        width="14"
        height="2"
        viewBox="0 0 14 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H0V0H14V2Z" fill="#8B96A5" />
      </svg>
    </>
  );
}

function Minus() {
  return (
    <>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#8B96A5" />
      </svg>
    </>
  );
}
