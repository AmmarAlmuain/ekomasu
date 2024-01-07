import DArrow from "../Icons/DArrow";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function SCollapose() {
  const CustomStar = (
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  );

  const myStyles = {
    itemShapes: CustomStar,
    itemStrokeWidth: 2,
    activeFillColor: "orange",
    activeStrokeColor: "none",
    inactiveFillColor: "grey",
    inactiveStrokeColor: "none",
  };
  return (
    <>
      <div>
        <div className="collapse border-t rounded-none border-color w-60">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex justify-between items-center w-full px-0">
            <span className="text-primary">Rating</span>
            <span>
              <DArrow />
            </span>
          </div>
          <div className="collapse-content flex-col gap-y-2 flex justify-start items-start px-0">
            {[5, 4, 3, 2, 1].map((number) => {
              return (
                <>
                  <div key={number} className="gap-x-2 -center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs border-secondary checked:border-gray-500 [--chkbg:theme(colors.white)] [--chkfg:#0D6EFD]"
                    />
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={number}
                      readOnly
                      itemStyles={myStyles}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
