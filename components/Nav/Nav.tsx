import Actions from "./Actions";
import Payment from "./Payment";
import Shipping from "./Shipping";

export default function Nav() {
  return (
    <>
      <nav className="w-full h-14 py-0.5 bg-white border-b border-b-color">
        <div className="w-full h-full flex justify-between items-center shrink-sides">
          <Actions />
          <div className="flex gap-x-8">
            <Payment />
            <Shipping />
          </div>
        </div>
      </nav>
    </>
  );
}
