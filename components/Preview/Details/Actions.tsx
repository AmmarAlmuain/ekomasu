export default function Actions() {
  return (
    <>
      <section className="flex border-b-2 border-color">
        <li className="cursor-pointer -center text-primary"></li>
        <ul className="flex gap-x-2 items-center w-full text-secondary px-2 h-12 font-medium">
          <li className="cursor-pointer px-4 text-thirdnp h-full -center">
            <span className="text-third">Description</span>
          </li>
          <li className="cursor-pointer px-4 h-full -center">
            <span>Reviews</span>
          </li>
          <li className="cursor-pointer px-4 h-full -center">
            <span>Shipping</span>
          </li>
          <li className="cursor-pointer px-4 h-full -center">
            <span>About Seller</span>
          </li>
        </ul>
      </section>
    </>
  );
}
