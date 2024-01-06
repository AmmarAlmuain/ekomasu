import Col from "./Col";
import Copyright from "./Copyright";
import DGroup from "./DGroup";
import SGroup from "./SGroup";

export default function Footr() {
  return (
    <>
      <section className="w-full flex max-sm:gap-x-6 flex-wrap max-xl:gap-y-4 max-xl:px-10 max-xl:items-start justify-between drop-shadow-sm items-start pt-12 pb-16 bg-white shrink-sides">
        <div className="max-xl:hidden">
          <SGroup />
        </div>
        <Col
          header="About"
          list={["About Us", "Find store", "Categories", "Blogs"]}
        />
        <Col
          header="Partnership"
          list={["About Us", "Find store", "Categories", "Blogs"]}
        />
        <Col
          header="Information"
          list={["Help Center", "Money Refund", "Shipping", "Contact us"]}
        />
        <Col
          header="For users"
          list={["Login", "Register", "Settings", "My Orders"]}
        />
        <DGroup />
      </section>
      <Copyright />
    </>
  );
}
