
import DashBoardHeader from "../component/DashboardHeader";
import DashboardNavBarDrawer from "../component/DashBoardNavBarDrawer";
import MarketContainer from "../component/MarketCapContainer";
import TopCoinContainer from "../component/TopCoinContainer";


const UserDashBoardNavScreen = () => {
 
    
   
 
  return (
    <div className="bg-[#262930] text-white w-full h-dvh overflow-auto">
      <DashBoardHeader />

      <MarketContainer />
      <TopCoinContainer />
      <DashboardNavBarDrawer />
    </div>
  );
};

export default UserDashBoardNavScreen;
