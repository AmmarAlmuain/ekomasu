/* eslint-disable @next/next/no-img-element */
export default function Item({
  src,
  name,
  discount,
}: {
  src: string;
  name: string;
  discount: number;
}) {
  return (
    <>
      <div className="w-48 h-full border-l-2 border-color cursor-pointer">
        <div className="h-full flex gap-y-2 flex-col justify-center items-center">
          <div>
            <img
              src={src}
              alt="sale item"
              className="w-36 h-36 mb-4 object-contain"
            />
          </div>
          <span className="text-primary">{name}</span>
          <span className="text-red-600 flex justify-center items-center h-8 text-center px-4 rounded-full text-sm bg-rose-500/20 font-medium">
            -{discount}%
          </span>
        </div>
      </div>
    </>
  );
}
