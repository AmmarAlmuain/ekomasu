import Logo from "../Icons/Logo";
import Actions from "./Actions";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <header className="w-full h-20 py-0.5 bg-white border-b border-color">
        <div className="full flex justify-between items-center shrink-sides">
          <Logo />
          <Search />
          <Actions />
        </div>
      </header>
    </>
  );
}
