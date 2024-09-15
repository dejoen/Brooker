import MarketCapCard from "./MarketCapCard"


const MarketContainer = () =>{
    return (
        <div className="w-full text-center mt-6 md:text-start md:m-6 ">
           <p className="text-sm  text-white ">{"Today's prices by marketcap"}</p>
           <div className="w-full flex flex-wrap place-items-center  justify-center mt-3 md:mt-5 gap-4 md:gap-10">
            <MarketCapCard  text={"🔥Trending"}/>
            <MarketCapCard text={"⌛Recently Added"}/>
           </div>
        </div>
    )
}


export default MarketContainer