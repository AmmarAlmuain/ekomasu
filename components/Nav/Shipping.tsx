import DArrow from "../Icons/DArrow";

export default function Shipping() {
  return (
    <>
      <div className="flex gap-x-2 justify-center items-center font-medium cursor-pointer">
        <span className="text-primary">Ship to 🇩🇪</span>
        <span className="text-secondary">
          <DArrow />
        </span>
      </div>
    </>
  );
}
