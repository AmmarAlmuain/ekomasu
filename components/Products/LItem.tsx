/* eslint-disable @next/next/no-img-element */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function LItem() {
  const CustomStar = (
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  );
  const myStyles = {
    itemShapes: CustomStar,
    itemStrokeWidth: 2,
    activeFillColor: "#FF9017",
    activeStrokeColor: "none",
    inactiveFillColor: "grey",
    inactiveStrokeColor: "none",
  };

  return (
    <>
      <div className="w-full bg-white max-md:rounded-none border-2 border-color max-md:flex-col max-md:gap-y-2 relative gap-x-4 flex rounded-md p-4">
        <div className="min-w-52 min-h-52 rounded-md max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <img
            src="https://media.discordapp.net/attachments/1025486564165427353/1195755282127667341/image.png?ex=65b524e3&is=65a2afe3&hm=341d162b8a8856cd297347f577f6fe05f62f8bc330c94fb3345fbcf14fe96194&=&format=webp&quality=lossless&width=525&height=525"
            alt="item image"
            className="max-w-52 max-h-52"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="w-full flex gap-x-2 justify-between">
            <h3 className="font-medium text-primary">
              Canon Cmera EOS 2000, Black 10x zoom
            </h3>
            <div className="min-w-10 min-h-10 max-h-10 mapx-w-10 rounded-md bg-white -center border-2 border-color">
              <IHeart />
            </div>
          </div>
          <span className="font-semibold text-xl text-primary">$998.00</span>
          <div className="flex justify-start gap-x-6 items-center">
            <span className="-center gap-x-2">
              <Rating
                style={{ maxWidth: 100, height: 20 }}
                value={4}
                readOnly
                itemStyles={myStyles}
              />
              <span className="text-[#FF9017]">9.3</span>
            </span>
            <span className="-center gap-x-2">
              <span>154 orders</span>
            </span>
            <p className="-center gap-x-2 text-[#00B517]">
              <span>Free Shipping</span>
            </p>
          </div>
          <p className="text-primary max-w-[650px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <span className="font-medium text-third">View details</span>
        </div>
      </div>
    </>
  );
}

function IHeart() {
  return (
    <>
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
    </>
  );
}
