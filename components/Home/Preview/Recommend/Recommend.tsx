import RecommendedItem from './RecommendedItem';

function Recommend() {
  return (
    <div className="flex flex-col bg-white p-8">
      <h2 className="text-primary text-xl font-bold ">Related Products</h2>
      <div className="flex">
        <RecommendedItem />
      </div>
    </div>
  );
}

export default Recommend;
