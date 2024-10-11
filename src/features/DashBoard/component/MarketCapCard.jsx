import PropTypes from "prop-types";

import MarketSpecificCoinCard from "./MarketSpecificCoinCard";
import { useRef } from "react";

const MarketCapCard = ({ text, data }) => {
  const bodyRef = useRef();

  return (
    <div
      ref={bodyRef}
      className="bg-black w-[300px] h-[250px] md:w-[400px] md:h-[230px] rounded-xl overflow-auto"
    >
      <div className="text-xs flex m-3 sticky top-2 bg-black bg-opacity-60 z-30 p-3">
        <div className="w-1/2 flex">
          <p className=" justify-self-center place-self-center">
            {text}
          </p>
        </div>
        <p
          className="w-1/2 text-end text-green-500 cursor-default"
          onClick={() => {
            bodyRef.current.scrollBy({ top: 20, behavior: "smooth" });
          }}
        >
          {"see more"}
        </p>
      </div>
      <div className=" w-full mt-2 flex  flex-col justify-center place-items-center  ">
        {data.map((coin, index) =>
           
          <MarketSpecificCoinCard key={index} coinInfo={coin.item} />
         )}
      </div>
    </div>
  );
};

MarketCapCard.propTypes = {
  text: PropTypes.string,
  data: PropTypes.array.isRequired
};

export default MarketCapCard;
