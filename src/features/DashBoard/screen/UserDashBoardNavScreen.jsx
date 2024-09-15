import DashBoardHeader from "../component/DashboardHeader";
import MarketContainer from "../component/MarketCapContainer";
import TopCoinContainer from "../component/TopCoinContainer";


const UserDashBoardNavScreen = () =>{
    return (
        <div className="bg-[#262930] text-white w-full h-dvh overflow-auto">
            <DashBoardHeader/>
           <MarketContainer/>
           <TopCoinContainer/>
        </div>
    );
}


export default UserDashBoardNavScreen

