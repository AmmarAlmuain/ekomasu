import Item from "./Item";

function Suggestions() {
  return (
    <div className="px-4 py-6 bg-white border-2 border-color rounded-md flex flex-col gap-y-4 min-w-72">
      <h2 className="font-bold text-primary text-xl">You may like</h2>
      <div className="flex gap-4 justify-between flex-col w-full m-auto">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Suggestions;
