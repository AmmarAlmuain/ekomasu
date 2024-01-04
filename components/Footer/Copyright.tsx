import { US } from "country-flag-icons/react/3x2";
import DArrow from "../Icons/DArrow";

export default function Copyright() {
  return (
    <>
      <section className="bg-faded-white flex justify-between items-center w-full h-16 mb-2 shrink-sides">
        <span className="text-primary">© 2023 Ecommerce. </span>
        <div className="-center gap-x-2">
          <div className="w-[24px] h-[17px]">
            <US />
          </div>
          <span className="text-primary">English</span>
          <div className="rotate-180 text-primary">
            <DArrow />
          </div>
        </div>
      </section>
    </>
  );
}
