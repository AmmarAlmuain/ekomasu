function Coupon() {
  return (
    <div className=" w-full max-w-[280px] p-6 bg-white mb-4 border border-gray-300 rounded">
      <form action="input" className="flex flex-col">
        <label htmlFor="coupon">Do you have a coupon?</label>
        <div className="flex border-2 px-2 rounded">
          <input
            id="coupon"
            type="text"
            className="bg-white focus:border-transparent focus:outline-none w-3/4"
            placeholder="add coupon"
          />
          <button className="border-l-2 px-6 py-2.5 font-bold text-third">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default Coupon;
