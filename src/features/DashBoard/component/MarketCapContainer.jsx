import { useEffect, useState } from "react";
import MarketCapCard from "./MarketCapCard";
import { getTrendingCoin } from "../service";

const MarketContainer = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    getTrendingCoin()
      .then(res => {
        return res.json();
      })
      .then(trendingCoins => {
        setTrendingCoins(trendingCoins.coins);
      })
      .catch(() =>{});
  }, []);

  return (
    <div className="w-full text-center mt-6 md:text-start md:m-6 ">
      <p className="text-sm  text-white ">
        {"Today's prices by marketcap"}
      </p>
      <div className="w-full flex flex-wrap place-items-center  justify-center mt-3 md:mt-5 gap-4 md:gap-10">
        <MarketCapCard text={"🔥Trending"} data={trendingCoins}/>
        <MarketCapCard text={"⌛Recently Added"} data={trendingCoins} />
      </div>
    </div>
  );
};

export default MarketContainer;
