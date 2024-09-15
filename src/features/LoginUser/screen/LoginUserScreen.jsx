import HomeSectionContainer from '../../home/component/home-body-side-containter.jsx';
import HomeNavBar from '../../home/component/home-nav-bar-component.jsx'
import LoginBodyContainer from '../component/LoginBodyContainer.jsx';

let LoginUserScreen = () =>{
  
  return (
    
    <div className="dark:bg-black dark:text-white text-white  bg-gray-900 h-screen overflow-hidden">
    <HomeNavBar/>
    <div className='md:flex place-items-center '>
    <LoginBodyContainer/>
    <HomeSectionContainer/>
    </div>
    </div>
    
    );
}

export default LoginUserScreen