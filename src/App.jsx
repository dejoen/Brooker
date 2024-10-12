

import WelcomeScreen from './features/home/screen/homeScreen'
import  PopUpScreen,{closePopUpScreen,openPopUpScreen} from './utils/popUpScreen/popUpScreenComponent'


let App = () =>{

 

  return (
    <div className="dark:bg-black dark:text-white relative">
    <WelcomeScreen/>
  
{
  /*<PopUpScreen>

  <div className='w-full h-full bg-cyan-200 '>
   <p onClick={()=>{
     openPopUpScreen()
  }}>open pop up</p>
  <p  onClick={()=>{
     closePopUpScreen()
  }}>click me</p>
  
  </div>
 
 
</PopUpScreen>
*/
}
    </div>
  )
}

export default App
