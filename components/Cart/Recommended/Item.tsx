/* eslint-disable @next/next/no-img-element */
export default function RItem({
  src,
  price,
  description,
}: {
  src: string;
  price: number;
  description: string;
}) {
  return (
    <div className="flex-auto">
      <div className="flex-col flex flex-wrap flex-auto gap-y-2">
        <div className="h-64 w-full min-w-64 -center bg-[#eeeeee] rounded-md">
          <img src={src} alt="item" className="h-64 w-64 rounded-md" />
        </div>
        <span className="text-primary">${price}</span>
        <p className="w-48 mb-2">{description}</p>
        <button className=" flex border-2 justify text-third-center rounded-md h-10 px-4 -center gap-x-4">
          <ICart />
          <p className="text-third font-medium">Move to cart</p>
        </button>
      </div>
    </div>
  );
}

function ICart() {
  return (
    <>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1676 11.9166C15.8551 11.9166 16.4601 11.5408 16.7717 10.9725L20.0534 5.02331C20.3926 4.41831 19.9526 3.66665 19.2559 3.66665H5.68924L4.82758 1.83331H1.83008V3.66665H3.66341L6.96341 10.6241L5.72591 12.8608C5.05674 14.0891 5.93674 15.5833 7.33008 15.5833H18.3301V13.75H7.33008L8.33841 11.9166H15.1676ZM6.56008 5.49998H17.6976L15.1676 10.0833H8.73258L6.56008 5.49998ZM7.33008 16.5C6.32174 16.5 5.50591 17.325 5.50591 18.3333C5.50591 19.3416 6.32174 20.1666 7.33008 20.1666C8.33841 20.1666 9.16341 19.3416 9.16341 18.3333C9.16341 17.325 8.33841 16.5 7.33008 16.5ZM16.4967 16.5C15.4884 16.5 14.6726 17.325 14.6726 18.3333C14.6726 19.3416 15.4884 20.1666 16.4967 20.1666C17.5051 20.1666 18.3301 19.3416 18.3301 18.3333C18.3301 17.325 17.5051 16.5 16.4967 16.5Z"
          fill="#0D6EFD"
        />
      </svg>
    </>
  );
}
