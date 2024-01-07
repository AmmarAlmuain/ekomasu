import React from 'react';


function ItemCart({image}) {
  return (
    <div className="flex justify-between px-12 py-6  ">
      <div className="flex ">
        <img
          src={image}
          alt="item"
          className="h-[80px] border border-black-100 rounded-lg mr-4"
        />
        <div className="">
          <h2 className="font-bold text-primary pb-2">
            T-shirts with multiple colors, for men and lady.
          </h2>
          <p>
            <span>Size: medium</span> <span>Color: blue,</span>
            <span>Material: Plastic</span> <br />{' '}
            <span>Seller: Artel Market</span>
          </p>
          <div className="flex gap-[10px] mt-2">
          <button className='border border-gray-300 p-[10px] text-red-500 rounded '>Remove</button>
          <button className='border border-gray-300 p-[10px] text-third rounded'>Save for Later</button>
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-primary">$248</p>

        <select id="number-select" value="number" className='bg-wall p-2 mt-2'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
}

export default ItemCart;
