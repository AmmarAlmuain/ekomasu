import Breadcrumbs from "@/components/Products/Breadcrumbs";
import LItem from "@/components/Products/LItem";
import Sidebar from "@/components/Products/Sidebar";

export default function Products() {
  return (
    <>
      <section className="w-full">
        <Breadcrumbs />
        <div className="flex pb-8 w-full max-md:flex-col">
          <Sidebar />
          <div className="w-full flex-col items-end max-md:px-0 flex gap-4 px-8">
            <div className="w-full h-[60px] gap-x-2 max-md:rounded-none rounded-md border-2 px-4 border-color flex justify-between items-center bg-white">
              <div className="text-primary">
                <p>
                  <span> 12,911 items </span> in
                  <span className="font-semibold"> Mobile accessory </span>
                </p>
              </div>
              <div>
                <div className="gap-x-2 -center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs border-secondary checked:border-gray-500 [--chkbg:theme(colors.white)] [--chkfg:#0D6EFD]"
                  />
                  <span className="text-gray-600"> Verified only </span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <LItem />
            </div>
            <div className="border-color border-2 rounded-md w-fit max-md:mr-4">
              <button className=" bg-white border-none w-10 h-10 rounded-md">
                <span className="text-primary">1</span>
              </button>
              <button className="bg-white border-none w-10 h-10 rounded-md">
                <span className="text-primary">2</span>
              </button>
              <button className="w-10 h-10 rounded-md btn-disabled">
                <span className="text-gray-500">...</span>
              </button>
              <button className="bg-white border-none w-10 h-10 rounded-md">
                <span className="text-primary">3</span>
              </button>
              <button className="bg-white border-none w-10 h-10 rounded-md">
                <span className="text-primary">4</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
