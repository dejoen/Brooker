import PropTypes from "prop-types";

   

 
  const MarketSpecificCoinCard = ({coinInfo}) => {
    

    return(
   <div className="w-[90%] h-[35px] bg-[rgb(33,35,37)] m-2 rounded-2xl p-2 flex">
      <div className="text-xs flex w-1/2 gap-2">
        <img className="w-[20px] h-[20px]" src={coinInfo.small}/>
        <p className="justify-self-center place-self-center">{coinInfo.name}<span>{`(${coinInfo.symbol})`}</span></p>

      </div>
      <div className="w-1/2 text-xs text-end">
     <p className={`${(`${coinInfo.data.price_change_percentage_24h.usd}`.includes('-'))?'text-red-600':'text-green-600'}`}>{Number(coinInfo.data.price_change_percentage_24h.usd).toFixed(3)}</p>
      </div>
   </div>
    ); 
  }
 
   MarketSpecificCoinCard.propTypes ={
    coinInfo:PropTypes.array.isRequired
   }

  export default MarketSpecificCoinCard