import HomeNavBar from "../component/home-nav-bar-component"
import HomeBodyContainer from "../component/home-body-container-component"

let WelcomeScreen = () => {
 return (
    <div className="">
        <HomeNavBar/>
        <HomeBodyContainer/>
        <p className="text-sm text-ellipsis relative w-full bottom-0 mt-5 text-center">binnances@2024</p>

    </div>
 )
}

export default WelcomeScreen