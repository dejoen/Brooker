
import  {useNavigate}  from 'react-router-dom'

let SignInSignOrUpUserContaner = () =>{
  const navigation = useNavigate()
    return (
      
      <div className="  flex flex-col place-items-center lg:w-1/2 ">
        <p className="pb-6 text-xl mt-4">Welcome to Binancez!</p>

        <div className="flex flex-col text-sm place-items-center" >

          <div className="bg-yellow-600 pl-2 pr-2 rounded-lg flex mb-6  mt-4" 
           onClick={()=>{
            navigation('/ja')
           
           }}
          >
           <p className="p-2">icon</p>
        <p className="p-2">Sign up email or phone number</p>
        <div>
        
        </div>
          
          
</div>

    <div className="pt-1 flex  justify-center ">
        <p className="w-32 bg-white h-0.5 mt-3 mr-3 " ></p>
        <p>or</p>
        <p className="w-32 bg-white h-0.5 mt-3 ml-3 " ></p>
    </div>

     <div>

     <div type='button' className="bg-yellow-600 pl-10 pr-10 rounded-lg flex mt-6  ">
    <p className="p-2">icon</p>
    <p className="p-2 ">Continue with Google</p>
    </div>

    <div className="bg-yellow-600 pl-10 pr-10  rounded-lg flex mt-6  ">
    <p className="p-2">icon</p>
    <p className="p-2">Continue with Apple</p>
    </div>
      </div>

      <div className="mt-5 text-sm  w-full pl-2 ">
        <div className="flex mb-2">
        <p>Already have an account? </p>
        <p>Log In</p>
        </div>

        <div className="flex">
        <p>Need an entity account? </p>
        <p>Sign Up</p>
        </div>
      </div>

        </div>

      </div>
    )
}

export default SignInSignOrUpUserContaner