export default function Coupon() {
  return (
    <div className=" w-full max-w-[280px] max-md:max-w-full p-6 bg-white mb-4 max-sm:rounded-none border-2 border-color rounded-md">
      <form className="flex flex-col gap-y-2 w-full">
        <span className="text-gray-600">Have a coupon?</span>
        <div className="flex border-2 border-color rounded-md">
          <input
            id="coupon"
            type="text"
            className="px-2 bg-transparent text-primary bg-none outline-none h-10 w-full"
            placeholder="add coupon"
          />
          <button className="border-l-2 border-color min-w-20 h-10 -center font-medium text-third">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
