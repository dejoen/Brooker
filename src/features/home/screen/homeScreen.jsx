import HomeNavBar from "../component/home-nav-bar-component"
import HomeBodyContainer from "../component/home-body-container-component"
import { Helmet, HelmetProvider } from "react-helmet-async"




let WelcomeScreen = () => {
 return (
   <HelmetProvider>
   
    <div className="">
    <Helmet>
      <title>Binnancez Brooker</title>
      
    </Helmet>
        <HomeNavBar/>
        <HomeBodyContainer/>
        <p className="text-sm text-ellipsis relative w-full bottom-0 mt-5 text-center">binnances@2024</p>

    </div>
    
    </HelmetProvider> 
 )
}

export default WelcomeScreen