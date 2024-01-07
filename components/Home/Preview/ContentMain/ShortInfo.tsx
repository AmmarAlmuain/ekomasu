import React from 'react';

function ShortInfo() {
  return (
    <div className="text-lg w-33/4 ">
      <div className="flex flex-row justify-between my-4 border-b-2 pb-4">
        <p>Price:</p>
        <span>negotiable </span>
      </div>

      {/* <hr className="bg-secondary h-12 w-px mx-1 flex" /> */}
      <div className="flex flex-row justify-between  my-4">
        <p>Type:</p>
        <span>Classic shoes </span>
      </div>
      <div className="flex flex-row justify-between  my-4">
        <p>Design:</p>
        <span>Modern nice</span>
      </div>
      <div
        className="flex flex-row justify-between my-4 border-b-2 pb-4
      ">
        <p>Customization:</p>
        <span className="text-end text-wrap">
          Customized logo and design custom packages
        </span>
      </div>
      <div className="flex flex-row justify-between  my-4">
        <p>Protection:</p> <span>Refund Policy</span>
      </div>
      <div className="flex flex-row justify-between  my-4 border-b-2 pb-4">
        <p>Warranty:</p>
        <span>2 years full warranty</span>
      </div>
    </div>
  );
}

export default ShortInfo;
