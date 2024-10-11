import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../utils/CarouselDisplay";
import SliderView from "./SliderView";
import { useEffect, useState } from "react";
import { getMarketCap } from "../service";

const TopCoinContainer = () =>{

  const [topCoins, setTopCoins] = useState([])

  useEffect(()=>{
    getMarketCap().then(res=>{
      return res.json()
    }).then(coins=>{
        let topCoins = coins.sort((a,b)=>{
          if(a.current_price > b.current_price){
            return -1
          }else{
            return 1
          }
         
        })
        topCoins = topCoins.slice(0,15)
        setTopCoins(topCoins)
      
    },[])
  })
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

          {
            topCoins.map((coin,index)=>(
              <SliderView  key={index}  coin={coin}/> 
            ))
//(`${coin.market_cap_change_percentage_24h}`.includes('-'))?'bg-[url(/src/assets/pricedownicon.svg)]':'bg-[url(/src/assets/sliderdesign.svg)]' 
          //  <SliderView image={'bg-[url(/src/assets/sliderdesign.svg)]'}/>
         // <SliderView image={'bg-[url(/src/assets/pricedownicon.svg)]'}/>
          }
          
          
            
        </Carousel>
        </div>
        </div>
      </div>
    </div>
    );
}


export default TopCoinContainer