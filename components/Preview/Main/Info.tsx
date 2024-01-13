/* eslint-disable @next/next/no-img-element */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function Info() {
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
    <div className="flex flex-col gap-y-2 max-sm:p-5">
      <div className="w-full flex gap-x-1.5 justify-start items-center text-[#00B517]">
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.79508 10.875L1.62508 6.70504L0.205078 8.11504L5.79508 13.705L17.7951 1.70504L16.3851 0.295044L5.79508 10.875Z"
            fill="#00B517"
          />
        </svg>
        <span>In stock</span>
      </div>
      <h2 className="text-primary text-xl font-semibold">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </h2>
      <div className="flex justify-start gap-x-10 items-center">
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
          <span>34 reviews</span>
        </span>
        <p className="-center gap-x-2">
          <span>109 sold</span>
        </p>
      </div>

      <div className=" flex p-2 gap-x-12 max-sm:gap-x-6 items-center bg-[#FFF0DF] justify-start">
        <div className="flex">
          <div className="flex flex-col justify-center items-start">
            <span className="text-red-600/70 font-semibold text-lg">
              $98.00
            </span>
            <span className="flex font-normal flex-col text-[#606060] text-[13px]">
              50-100 pcs
            </span>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="divider-horizontal w-[1px] bg-[#BDC1C8] my-1.5 divider mx-0"></div>
          <div className="flex flex-col justify-center items-start">
            <span className="font-semibold text-lg text-primary">$90.00</span>
            <span className="flex font-normal flex-col text-[13px] text-[#606060]">
              100-700 pcs
            </span>
          </div>
        </div>

        <div className="flex gap-x-2">
          <div className="divider-horizontal w-[1px] my-1.5 bg-[#BDC1C8] divider mx-0"></div>
          <div className="flex flex-col justify-center items-start">
            <span className="font-semibold text-lg text-primary">$78.00</span>
            <span className="flex font-normal flex-col text-[#606060] text-[13px]">
              700+ pcs
            </span>
          </div>
        </div>
      </div>

      <div className="text-lg w-full">
        <div className="flex border-b-2 w-full py-2 gap-y-4">
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <span className="w-36 text-base">Price:</span>
            <span className="text-[#505050] text-base">Negotiable</span>
          </div>
        </div>

        <div className="flex flex-col border-b-2 w-full py-4 gap-y-4">
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <span className="w-36 text-base">Type:</span>
            <span className="text-[#505050] text-base">Classic shoes</span>
          </div>
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <span className="w-36 text-base">Material:</span>
            <span className="text-[#505050] text-base">Plastic material</span>
          </div>
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <span className="w-36 text-base">Design:</span>
            <span className="text-[#505050] text-base">Modern nice</span>
          </div>
        </div>

        <div className="flex flex-col border-b-2 max-lg:border-b-0 w-full max-lg:pb-4 py-4 gap-y-4">
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <span className="w-36 text-base">Customization:</span>
            <span className="text-[#505050] text-base w-48">
              Customized logo and design custom packages
            </span>
          </div>
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <span className="w-36 text-base">Protection:</span>
            <span className="text-[#505050] text-base">Refund Policy</span>
          </div>
          <div className="flex items-center max-lg:flex-col max-lg:items-start">
            <span className="w-36 text-base">Warranty:</span>
            <span className="text-[#505050] text-base">
              2 years full warranty
            </span>
          </div>
        </div>
      </div>
      <div className="my-3 max-lg:hidden"></div>
    </div>
  );
}

export default Info;
