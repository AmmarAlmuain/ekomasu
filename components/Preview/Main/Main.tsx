import Gallery from "./Gallery";
import Info from "./Info";
import Seller from "./Seller";

function Main() {
  return (
    <div className="flex border-color gap-6 max-sm:gap-y-0 max-lg:flex-col rounded-md bg-white p-5 max-sm:p-0 max-sm:rounded-none border-2">
      <div className="w-[380px] max-lg:w-full">
        <Gallery />
      </div>
      <Info />
      <Seller />
    </div>
  );
}

export default Main;
