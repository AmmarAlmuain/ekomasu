import Item from "./Item";

function Recommend() {
  return (
    <div className="px-4 py-6 bg-white w-full border-2 border-color rounded-md flex flex-col gap-y-4">
      <h2 className="font-bold text-primary text-xl">Related Products</h2>
      <div className="flex gap-4 flex-wrap justify-between">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Recommend;
