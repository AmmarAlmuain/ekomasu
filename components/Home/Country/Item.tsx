import React from "react";

/* eslint-disable @next/next/no-img-element */
export default function Item({
  flag,
  name,
  domain,
}: {
  flag: React.ReactNode;
  name: string;
  domain: string;
}) {
  return (
    <>
      <div className="w-56 h-9 flex justify-center items-center gap-x-4">
        <div className="w-7 h-5">{flag}</div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-primary">{name}</span>
          <span className="text-[13px] leading-none text-secondary">
            {domain}
          </span>
        </div>
      </div>
    </>
  );
}
