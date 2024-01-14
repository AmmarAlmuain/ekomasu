import Actions from "./Actions";
import Payment from "./Payment";
import Shipping from "./Shipping";

export default function Nav() {
  return (
    <>
      <nav className="w-full h-14 max-md:h-full py-0.5 bg-white border-b border-b-color">
        <div className="w-full h-full flex justify-between items-center max-xl:px-4 shrink-sides">
          <Actions />
          <div className="flex gap-x-8 max-lg:hidden">
            <Payment />
            <Shipping />
          </div>
        </div>
      </nav>
    </>
  );
}
