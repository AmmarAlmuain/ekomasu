import DArrow from "../Icons/DArrow";

export default function RCollapose({
  title,
  list,
}: {
  title: string;
  list: string[];
}) {
  return (
    <>
      <div className="w-full">
        <div className="collapse border-t rounded-none border-color w-full px-4">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex justify-between items-center w-full px-0">
            <span className="text-primary">{title} </span>
            <span>
              <DArrow />
            </span>
          </div>
          <div className="collapse-content flex-col gap-y-2 flex justify-start items-start px-0">
            <div className="gap-x-2 -center">
              <input
                type="radio"
                name="condition"
                checked
                className="checked:bg-third checked:border-third border-[#8B96A5] radio radio-xs"
              />
              <span className="text-gray-600">All</span>
            </div>
            {list.map((item) => {
              return (
                <div key={item} className="gap-x-2 -center">
                  <input
                    type="radio"
                    name="condition"
                    className="checked:bg-third checked:border-third border-[#8B96A5] radio radio-xs"
                  />
                  <span className="text-gray-600">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
