import Gallery from "./Gallery";
import Info from "./Info";
import Seller from "./Seller";

function Main() {
  return (
    <div className="flex border-color gap-6 rounded-md bg-white p-5 border-2">
      <div className="w-[380px]">
        <Gallery />
      </div>
      <Info />
      <Seller />
    </div>
  );
}

export default Main;
