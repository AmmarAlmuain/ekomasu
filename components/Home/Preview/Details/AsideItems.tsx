import Item from './Item';

function AsideItems() {
  return (
    <div className=" ml-6 w-1/3 flex flex-col ">
      <h2 className="text-primary text-xl font-bold">You may like</h2>
      <Item />
     
    </div>
  );
}

export default AsideItems;
