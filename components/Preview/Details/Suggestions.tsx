import Item from "./Item";

export default function Suggestions() {
  return (
    <div className="px-4 py-6 max-lg:hidden bg-white border-2 border-color rounded-md flex h-full flex-col gap-y-4 min-w-72">
      <h2 className="font-bold text-primary text-xl">You may like</h2>
      <div className="flex gap-4 items-start justify-start flex-col w-full">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
