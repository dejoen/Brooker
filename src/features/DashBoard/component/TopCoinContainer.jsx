import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../utils/CarouselDisplay";
import SliderView from "./SliderView";

const TopCoinContainer = () =>{
    return (
    <div className="m-8">
      <div className="w-full text-sm flex ">
        <p className="w-1/2">{"Top Coins"}</p>
        <p className="w-1/2 text-end">{'All Time'}</p>
      </div>
      <div>

      <div className=" mx-auto h-fit w-full flex  ">
      <div className="mx-auto w-full  mt-5">
        <Carousel    responsive={responsive} autoPlay={true}   rewindWithAnimation={true} infinite={true} partialVisbile={true} transitionDuration={1000} arrows={false} ssr={true} >
          
          <SliderView image={'bg-[url(/src/assets/sliderdesign.svg)]'}/>
          <SliderView image={'bg-[url(/src/assets/pricedownicon.svg)]'}/>
          <SliderView image={'bg-[url(/src/assets/sliderdesign.svg)]'}/>
            
        </Carousel>
        </div>
        </div>
      </div>
    </div>
    );
}


export default TopCoinContainer