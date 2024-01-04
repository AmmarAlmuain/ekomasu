import { appleButtonStore, googleButtonStore } from "../BStores";

export default function DGroup() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-y-2">
        <li className="text-primary font-medium decoration-transparent list-none">
          Get app
        </li>
        <ul className="flex flex-col gap-y-2 justify-start items-start">
          <li className="cursor-pointer">{appleButtonStore}</li>
          <li className="cursor-pointer">{googleButtonStore}</li>
        </ul>
      </div>
    </>
  );
}
