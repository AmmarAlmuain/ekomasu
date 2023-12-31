import DArrow from "../Icons/DArrow";

export default function Payment() {
  return (
    <>
      <div className="flex gap-x-2 justify-center items-center font-medium cursor-pointer">
        <span className="text-primary">English, USD</span>
        <span className="text-secondary">
          <DArrow />
        </span>
      </div>
    </>
  );
}
