import Cart from "../Icons/Cart";
import Heart from "../Icons/Heart";
import Message from "../Icons/Message";
import Profile from "../Icons/Profile";

export default function Actions() {
  return (
    <>
      <section className="h-full min-w-fit">
        <ul className="h-full flex text-xs gap-x-8 text-secondary">
          <li className="h-full py-4 flex flex-col justify-between items-center cursor-pointer">
            <Profile />
            <span>Profile</span>
          </li>
          <li className="h-full max-xl:hidden py-4 flex flex-col justify-between items-center cursor-pointer">
            <Message />
            <span>Message</span>
          </li>
          <li className="h-full max-xl:hidden py-4 flex flex-col justify-between items-center cursor-pointer">
            <Heart />
            <span>Orders</span>
          </li>
          <li className="h-full py-4 flex flex-col justify-between items-center cursor-pointer">
            <Cart />
            <span>My Cart</span>
          </li>
        </ul>
      </section>
    </>
  );
}
