
import  {Link}  from 'react-router-dom'
import btc  from  '../../../assets/btc.svg'
import eth from '../../../assets/eth.svg'
import bnb from '../../../assets/bnb.svg'
import xpr from '../../../assets/xpr.svg'

let SignInSignOrUpUserContaner = () =>{
  
    return (
      
      <div className="  flex flex-col place-items-center lg:w-1/2 ">
        <p className="pb-6 text-xl mt-4">Welcome to Binancez!</p>

        <div className="flex flex-col text-sm place-items-center" >

 

          <p className='text-xl text-yellow-500'>Fund Your Account</p>
           <p>And Start Trading!</p>

           <div className='mt-5 '>
            <div className=' BtcContainer flex place-items-center '>
            <img src={btc}/>
           <div className='flex gap-5 '>
           <p className='text-ellipsis'>BTC</p> 
           <p>$35,09000</p>
           <p className='text-green-600'>0.937%</p>
           </div>


            </div>

            <div className=' EthContainer flex place-items-center mt-4'>
            <img src={eth}/>
           <div className='flex gap-5 '>
           <p className='text-ellipsis'>ETH</p> 
           <p>$35,09000</p>
           <p className='text-red-600'>0.637%</p>
           </div>

           


            </div>

            <div className=' BNBContainer flex place-items-center mt-4'>
            <img src={bnb}/>
           <div className='flex gap-5 '>
           <p className='text-ellipsis'>BNB</p> 
           <p>$35,09000</p>
           <p className='text-green-600'>0.937%</p>
           </div>

           


            </div>

            <div className=' XPRContainer flex place-items-center mt-4'>
            <img src={xpr}/>
           <div className='flex gap-5 '>
           <p className='text-ellipsis'>XPR</p> 
           <p>$35,09000</p>
           <p className='text-green-600'>0.837%</p>
           </div>

           


            </div>

           </div>

     <div>

     

   
      </div>

      <div className="mt-16 text-sm  w-full pl-2 ">
        <div className="flex mb-2">
        <p>Already have an account? <span className='text-yellow-500'><Link to={'/loginUser'}>Login</Link></span> </p>
        <p></p>
        </div>

        <div className="flex">
        <p>Need an entity account?   <span className='text-yellow-500'><Link to={'/registerUser'}>SignUp</Link></span></p>
        </div>
      </div>

        </div>

      </div>
    )
}

export default SignInSignOrUpUserContaner