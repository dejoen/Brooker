/* eslint-disable react/prop-types */

import shibaIcon from '../../../assets/shibaicon.svg'

const SliderView = ({image}) => {
    return (

<div className={`relative w-[85%] md:w-[90%] h-[200px] bg-black rounded-xl `}>
    <div className='p-3'>
    <img className='w-[40px] h-[40px] ' src={shibaIcon} />
     <p className='text-sm mt-1'>{'shibanu'}</p>
    </div>
    <div className={`${image} h-[200px]`}>
       <p className='ms-2'>{'0.000897$'}</p>
       <p className='text-green-600 absolute bottom-1 ms-2'>{'0.67%'}</p>
    </div>
</div>
    );
}

export default SliderView