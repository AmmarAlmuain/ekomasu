import Logo from "../Icons/Logo";
import Actions from "./Actions";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <header className="w-full h-20 py-0.5 bg-white border-b border-b-color">
        <div className="full flex justify-between max-lg:gap-x-2 items-center max-xl:px-4 shrink-sides">
          <div className="max-sm:hidden">
            <Logo />
          </div>
          <Search />
          <Actions />
        </div>
      </header>
    </>
  );
}
