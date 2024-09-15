import bsvg from '../../../../src/assets/bsvg.svg'
let HomeSectionContainer = () =>{
    
    return(
        <
            div className="lg:w-1/2 w-full hidden md:flex  flex-col place-items-center  ">
       <img src={bsvg} className='m-3 h-42 lg:h-fit'  />
      <p className='mx-auto   w-fit text-ellipsis mt-1  '>Sign up to get 100 USDT trading fee rebate!</p>
       </div>
     
    )
}

export default HomeSectionContainer