import DArrow from "../Icons/DArrow";

export default function PCollapse() {
  return (
    <>
      <div className="w-full">
        <div className="collapse border-t rounded-none border-color w-full px-4">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex justify-between items-center w-full px-0">
            <span className="text-primary">Price range</span>
            <span>
              <DArrow />
            </span>
          </div>
          <div className="collapse-content flex-col px-4 gap-y-2 flex justify-start items-start"></div>
        </div>
      </div>
    </>
  );
}
