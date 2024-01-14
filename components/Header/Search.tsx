import DArrow from "../Icons/DArrow";

export default function Search() {
  return (
    <>
      <section className="max-w-[665px] w-full h-10">
        <div className="flex full rounded-md border-third max-[500px]:border-[#DEE2E7] max-[500px]:bg-gray-200 border-2">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="full placeholder:text-secondary bg-transparent max-[500px]:placeholder:text-primary outline-none text-primary px-2"
          />
          <button
            type="button"
            className="gap-x-8 max-lg:hidden px-2 h-full border-l border-third text-nowrap flex justify-between items-center"
          >
            <span className="text-primary">All category</span>
            <span className="text-secondary">
              <DArrow />
            </span>
          </button>
          <button
            type="button"
            className="px-6 max-[500px]:hidden h-full -center third-gradient text-white"
          >
            Search
          </button>
        </div>
      </section>
    </>
  );
}
