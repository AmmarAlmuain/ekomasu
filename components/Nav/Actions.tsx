import DArrow from "../Icons/DArrow";
import Hamburger from "../Icons/Hamburger";

export default function Actions() {
  return (
    <>
      <section className="flex gap-x-2 max-md:hidden">
        <li className="cursor-pointer -center text-primary">
          <Hamburger />
        </li>
        <ul className="text-primary flex gap-x-6 h-full font-medium">
          <li className="cursor-pointer">
            <span>All category</span>
          </li>
          <li className="cursor-pointer">
            <span>Hot offers</span>
          </li>
          <li className="cursor-pointer">
            <span>Gift boxes</span>
          </li>
          <li className="cursor-pointer">
            <span>Projects</span>
          </li>
          <li className="cursor-pointer">
            <span>Menu item</span>
          </li>
          <li className="cursor-pointer">
            <div className="flex gap-x-2 justify-center items-center">
              <span> Help </span>
              <span className="text-secondary">
                <DArrow />
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section className="h-full my-0 py-0 hidden max-md:flex w-full">
        <div tabIndex={0} className="collapse rounded-none w-full px-4">
          <div className="collapse-title flex gap-x-2 text-primary text-xl font-medium">
            <li className="cursor-pointer -center text-primary">
              <Hamburger />
            </li>
            <span> Show navbar </span>
          </div>
          <div className="collapse-content">
            <ul className="text-primary flex gap-x-6 gap-y-4 h-full flex-col font-medium">
              <li className="cursor-pointer">
                <span>All category</span>
              </li>
              <li className="cursor-pointer">
                <span>Hot offers</span>
              </li>
              <li className="cursor-pointer">
                <span>Gift boxes</span>
              </li>
              <li className="cursor-pointer">
                <span>Projects</span>
              </li>
              <li className="cursor-pointer">
                <span>Menu item</span>
              </li>
              <li className="cursor-pointer">
                <div className="flex gap-x-2 justify-start items-center">
                  <span> Help </span>
                  <span className="text-secondary">
                    <DArrow />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
