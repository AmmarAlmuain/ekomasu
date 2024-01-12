/* eslint-disable @next/next/no-img-element */
import Verified from "@/components/Icons/Verified";
import World from "@/components/Icons/World";
import { DE } from "country-flag-icons/react/3x2";

export default function Seller() {
  return (
    <div className=" w-full max-w-[280px] flex flex-col gap-y-6">
      <div className="border-2 rounded-md border-color py-6 px-4">
        <div className="flex gap-x-3">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1192092440857936014/image.png?ex=65a7d199&is=65955c99&hm=9114def92bfcaaedd37f21d98353015ee88dcc5d258c5dab5562c99fb5d53eec&"
            alt="name"
            className="h-12"
          />
          <div className="flex-col flex justify-center items-start">
            <span className="flex flex-col text-sm">Supplier</span>
            <span className="nowrap ">Guanjoi Trading LLC</span>
          </div>
        </div>
        <div className="divider my-2"></div>
        <div className="flex flex-col gap-y-4 justify-center items-start">
          <div className="-center gap-x-4">
            <DE width={21} height={15} />
            <span>Germany Berlin</span>
          </div>
          <div className="-center gap-x-4">
            <Verified />
            <span>Verified seller</span>
          </div>
          <div className="-center gap-x-4">
            <World />
            <span>Worldwide shipping</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-6">
          <button className="third-gradient text-white w-full h-10 rounded-md">
            Seller Inquiry
          </button>
          <button className="text-third border-2 border-color rounded-md w-full h-10">
            Seller&apos;s Profile
          </button>
        </div>
      </div>

      <div className="flex">
        <button className="flex items-center gap-x-2 text-third w-full text-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 0.824951C12.76 0.824951 11.09 1.63495 10 2.91495C8.91 1.63495 7.24 0.824951 5.5 0.824951C2.42 0.824951 0 3.24495 0 6.32495C0 10.105 3.4 13.185 8.55 17.865L10 19.175L11.45 17.855C16.6 13.185 20 10.105 20 6.32495C20 3.24495 17.58 0.824951 14.5 0.824951ZM10.1 16.375L10 16.475L9.9 16.375C5.14 12.065 2 9.21495 2 6.32495C2 4.32495 3.5 2.82495 5.5 2.82495C7.04 2.82495 8.54 3.81495 9.07 5.18495H10.94C11.46 3.81495 12.96 2.82495 14.5 2.82495C16.5 2.82495 18 4.32495 18 6.32495C18 9.21495 14.86 12.065 10.1 16.375Z"
              fill="#0D6EFD"
            />
          </svg>
          <span className="font-medium">Save Later</span>
        </button>
      </div>
    </div>
  );
}
