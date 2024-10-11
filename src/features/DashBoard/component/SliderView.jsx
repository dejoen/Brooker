

import PropTypes from 'prop-types';


const SliderView = ({coin}) => {

    
    return (

<div className={`relative w-[85%] md:w-[90%] h-[200px] bg-black rounded-xl `}>
    <div className='p-3'>
    <img className='w-[40px] h-[40px] ' src={coin.image} />
     <p className='text-sm mt-1'>{`${coin.name} (${coin.symbol})`}</p>
    </div>
    <div className={`  ${(coin.market_cap_change_percentage_24h>0) && 'bg-priceUpBackground'  || (coin.market_cap_change_percentage_24h<0) &&  'bg-priceDownBackground'} h-[200px]`}>
       <p className='ms-2'>{`$${coin.current_price}`}</p>
       <p className={`${(`${coin.market_cap_change_percentage_24h}`.includes('-'))? 'text-red-600':'text-green-600'} absolute bottom-1 ms-2`}>{Number(coin.market_cap_change_percentage_24h).toFixed(3)+"%"}</p>
    </div>
</div>
    );
}

SliderView.propTypes  = {
    coin:PropTypes.object.isRequired
}

export default SliderView