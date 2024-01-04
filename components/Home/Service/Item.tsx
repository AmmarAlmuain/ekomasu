import React from "react";

/* eslint-disable @next/next/no-img-element */
export default function Item({
  src,
  icon,
  title,
}: {
  src: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div className="w-72 h-52">
        <div className="max-h-32 overflow-hidden rounded-tl-md rounded-tr-md">
          <img
            src={src}
            alt="service image"
            className="w-full h-32 object-cover scale-105"
          />
        </div>
        <div className="flex w-full bg-transparent h-20 relative rounded-bl-md rounded-br-md justify-start items-center p-6 border-b-2 border-l-2 border-r-2 border-color">
          <div className="w-14 h-14 -center rounded-full p-1 bg-white absolute right-7 top-0 -translate-y-2/4">
            <div className="min-w-14 min-h-14 border-2 border-white rounded-full -center bg-fourth">
              {icon}
            </div>
          </div>
          <span className="w-44 text-primary">{title}</span>
        </div>
      </div>
    </>
  );
}
