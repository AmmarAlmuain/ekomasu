/* eslint-disable @next/next/no-img-element */
export default function Item({
  price,
  title,
  src,
}: {
  price: number;
  title: string;
  src: string;
}) {
  return (
    <>
      <div className="rounded-md p-4 cursor-pointer max-xl:flex-auto bg-white -center-col border-2 border-color w-56 h-80">
        <img src={src} alt="item image" className="w-52 h-52 mb-2" />
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-primary font-medium">${price}</h3>
          <span>{title}</span>
        </div>
      </div>
    </>
  );
}
