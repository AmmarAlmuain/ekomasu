import React from 'react';
import ItemCart from './ItemCart';
import Coupon from './Coupon';
import AsideSummary from './AsideSummary';

import Saved from './Saved';

function Cart() {
  return (
    <div >
      <div className="flex gap-4 justify-center ">
        <div className="bg-white w-full max-w-[880px] border border-gray-300 rounded">
          <ItemCart
            image={
              'https://cdn.discordapp.com/attachments/1191096855560454287/1192424091727175741/image.png?ex=65a90679&is=65969179&hm=ba04758d45cb174a826bbe592eb215208279bb465b1dcea044db3b21f58ab46a&'
            }
          />
          <ItemCart
            image={
              'https://cdn.discordapp.com/attachments/1191096855560454287/1193262678404247632/image.png?ex=65ac1378&is=65999e78&hm=c05d4516976a4f9ac1dc832796d391799561323839c604e5780fc51d6a4d7dc0&'
            }
          />
          <ItemCart
            image={
              'https://cdn.discordapp.com/attachments/1191096855560454287/1193262197309190205/image.png?ex=65ac1305&is=65999e05&hm=e7b75a628003ea8fb361888d82ce840ce5b57262bf12ad235580c9c586b7ee59&'
            }
          />
          <div className=" flex gap-64 justify-between">
            <button className="bg-third w-[159px] h-[50px] px-[10px] items-center my-auto justify-self-end mb-4 ml-4 text-white rounded flex">
              {' '}
              <img
                src="https://cdn.discordapp.com/attachments/1191096855560454287/1193256195029467217/image.png?ex=65ac0d6e&is=6599986e&hm=1ad02ecc9a2a622ff557f4c533314be0c5576c6118834af83675217a9c910f41&"
                alt="arrow"
                className="h-[22px] w-[22px] self-center mr-4"
              />
              Back to shop
            </button>
            <button className="text-third w-[159px] h-[50px] px-[10px] items-center  justify-self-center mb-4 ml-4 border border-gray-300 bg-white rounded mr-4">
              Remove All
            </button>
          </div>
        </div>
        <div className="w-full max-w-[280px]">
          <Coupon />
          <AsideSummary />
        </div>
      </div>
      <div className="flex justify-center w-full max-w-[1180px] my-6 ml-4">
        <div className="flex m-4">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269293241077861/image.png?ex=65ac19a1&is=6599a4a1&hm=7dbc9a6b8699976c75e2b919bb15b5147f8c6758e6f3e24d890f3a54769c54c8&"
            alt="locked"
                      className="w-full max-w-[48px] ml-6 mr-2 "
          />{' '}
          <p>
            <span className="font-bold text-primary block">Secure payment</span>{' '}
            Have you ever finally just{' '}
          </p>
        </div>
        <div className="flex m-4">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269481426931803/image.png?ex=65ac19ce&is=6599a4ce&hm=aecfee123fa45389d3e57a9bc8ae34606090f590d6e1e656dbdb4a2172b09d94&"
            alt=""
            className="w-full max-w-[48px] mr-2"
          />
          <p>
            <span className="font-bold text-primary block">
              Customer support
            </span>{' '}
            Have you ever finally just
          </p>
        </div>
        <div className="flex m-4">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269836151795844/image.png?ex=65ac1a22&is=6599a522&hm=fc7c2fcb9c8e72ed0ce73e889098bec768a8c03d760adaa73d4b0e55b37434b0&"
            alt="bus"
            className="w-full max-w-[48px] mr-2"
          />
          <p>
            <span className="font-bold text-primary block">
              Customer support
            </span>{' '}
            Free delivery Have you ever finally just
          </p>
        </div>
      </div>
      <div className="mt-6 p-12 bg-white w-full max-w-[1180px] m-auto border border-gray-300 rounded">
        <h2 className="font-bold text-primary mb-6">Save Later</h2>
        <div className=" flex gap-6 justify-center m-auto ">
          <Saved
            image={
              'https://cdn.discordapp.com/attachments/1191096855560454287/1192543718855692338/image.png?ex=65a975e2&is=659700e2&hm=44fde9584c2ed54cbe5f63eead67e40d1c1b70fad5ca118556ecb5bfff1f6645&'
            }
            text={'GoPro HERO6 4K Action'}
            description={'Camera - Black'}
          />
          <Saved
            image={
              'https://cdn.discordapp.com/attachments/1191096855560454287/1193266092060184596/image.png?ex=65ac16a6&is=6599a1a6&hm=3b4dd731faed20c77b3b31316da627cafb4bb579812523ceceb547f6bf03e755&'
            }
            text={'GoPro HERO6 4K Action'}
            description={'Camera - Black'}
          />
          <Saved
            image={
              'https://cdn.discordapp.com/attachments/1191096855560454287/1193277077856714853/image.png?ex=65ac20e1&is=6599abe1&hm=4792aac005100edfb64a6bc38af86068b8d3b505fa1ddc2649a6e36478ee2b1c&'
            }
            text={'GoPro HERO6 4K Action'}
            description={'Camera - Black'}
          />
          <Saved
            image={
              'https://cdn.discordapp.com/attachments/1191096855560454287/1193266111119110185/image.png?ex=65ac16aa&is=6599a1aa&hm=0e9a342c76cb33f1da511f14f09c1c07fabe98c51bcf9dffafb5f8cfa2e2b2c2&'
            }
            text={'GoPro HERO6 4K Action'}
            description={'Camera - Black'}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
