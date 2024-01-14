import DArrow from "../Icons/DArrow";

export default function CCollapse({
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
            {list.map((item) => {
              return (
                <div key={item} className="gap-x-2 -center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs border-secondary checked:border-gray-500 [--chkbg:theme(colors.white)] [--chkfg:#0D6EFD]"
                  />
                  <span className="text-gray-600">{item}</span>
                </div>
              );
            })}
            <span className="text-third cursor-pointer"> See all</span>
          </div>
        </div>
      </div>
    </>
  );
}
