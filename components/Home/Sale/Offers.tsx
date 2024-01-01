export default function Offers() {
  return (
    <>
      <section className="w-full">
        <div className="w-full min-w-[293px] h-full flex justify-center items-center">
          <div className="flex flex-col w-full gap-y-4 p-12 text-start justify-center items-start">
            <div>
              <h3 className="text-xl text-primary font-semibold">
                Deals and offers
              </h3>
              <span className="text-secondary">Hygiene equipments</span>
            </div>
            <button
              type="button"
              className="py-2 px-4 rounded-md bg-third text-white"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
