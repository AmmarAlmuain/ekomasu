import Carousel from "./Carousel"
import Info from "./Info"
import SellerInfo from "./SellerInfo"


function ContentMain() {
  return (
      <div className="flex gap-5 bg-white justify-center p-8 ">
          <Carousel  />   
          <Info image="" title="" alt="" price="" priceRange="" />
      <SellerInfo />
      
    </div>
  )
}

export default ContentMain