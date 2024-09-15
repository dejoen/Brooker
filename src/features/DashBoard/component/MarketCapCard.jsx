/* eslint-disable react/prop-types */
import MarketSpecificCoinCard from "./MarketSpecificCoinCard";

const MarketCapCard = ({text})=>{
    return (

<div className="bg-black w-[300px] h-[250px] md:w-[400px] md:h-[230px] rounded-xl overflow-auto">
    <div  className="text-xs flex m-3 sticky top-2 bg-black bg-opacity-60 z-30 p-3">
    <div className="w-1/2 flex">
    
    <p className=" justify-self-center place-self-center">{text}</p>
    </div>
     <p className="w-1/2 text-end text-green-500">{'see more'}</p>
    </div>
    <div className=" w-full mt-2 flex  flex-col justify-center place-items-center  ">
       {
        [1,2,3,4,5,6,7,8].map((item,index)=>(
            <MarketSpecificCoinCard key={index}/>
        ))
       }
    </div>
</div>
    );
}

export default MarketCapCard