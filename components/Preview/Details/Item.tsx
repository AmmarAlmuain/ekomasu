/* eslint-disable @next/next/no-img-element */
import React from "react";

function Item() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-4">
        <img
          src="https://cdn.discordapp.com/attachments/1191096855560454287/1193299927678332989/image.png?ex=65ac3629&is=6599c129&hm=10d19ccb4daf8a65cfbc37a78d731b7297b140fcd92379d218992c2e650bd802&"
          alt="img"
          className="h-20"
        />
        <div className=" flex flex-col self-stretch justify-around content-between">
          <h2 className="text-primary">Xiaomi Redmi 8 Original</h2>
          <p className="justify-self-end text-secondary">$32.00-$40.00</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
