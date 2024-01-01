/* eslint-disable @next/next/no-img-element */
export default function Item({
  src,
  name,
  price,
  BBorder,
  LBorder,
}: {
  src: string;
  name: string;
  price: number;
  BBorder: boolean;
  LBorder: boolean;
}) {
  return (
    <>
      <div
        className="w-[240px] cursor-pointer h-2/4 relative border-color"
        style={{
          borderBottom: BBorder ? "2px solid #DEE2E7" : "",
          borderLeft: LBorder ? "2px solid #DEE2E7" : "",
        }}
      >
        <div className="absolute top-0 left-0 p-4 flex flex-col gap-y-2">
          <span className="text-primary">{name}</span>
          <span className="text-[13px] text-secondary">
            From <br></br> USD {price}
          </span>
        </div>
        <img
          src={src}
          alt="block item"
          className="w-20 h-20 absolute bottom-0 right-0"
        />
      </div>
    </>
  );
}
