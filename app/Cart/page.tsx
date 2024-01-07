import Cart from '@/components/Cart/Cart';

export default function page() {
  return (
    <div className=" mt-6">
      <h2 className='w-full max-w-[1180px] m-auto font-bold text-primary'>My Cart(3)</h2>
      <div className="bg-wall py-6">
        <Cart />
      </div>
    </div>
  );
}
