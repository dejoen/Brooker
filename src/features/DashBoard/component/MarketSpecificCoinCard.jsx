  

  const MarketSpecificCoinCard = () => {

    return(
   <div className="w-[90%] h-[35px] bg-[#212325] m-2 rounded-2xl p-2 flex">
      <div className="text-xs flex w-1/2">
        <img className="w-[20px] h-[20px]" src="/"/>
        <p className="justify-self-center place-self-center">{'Tether'}<span>{'Usdt'}</span></p>

      </div>
      <div className="w-1/2 text-xs text-end">
     <p className={`text-green-600`}>{'43.4%'}</p>
      </div>
   </div>
    ); 
  }


  export default MarketSpecificCoinCard