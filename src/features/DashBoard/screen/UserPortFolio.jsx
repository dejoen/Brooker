import BalanceContainer from "../component/BalanceContainer";
import CoinDisplayContainer from "../component/CoinDisplayCointainer";
import DashBoardHeader from "../component/DashboardHeader";
import DashboardNavBarDrawer from "../component/DashBoardNavBarDrawer";

const UserPortfolio = () =>  {
    return(
      <div className="bg-[#262930] text-white w-full h-dvh overflow-auto">
      <DashBoardHeader/>
      <BalanceContainer/>
      <CoinDisplayContainer/>
      <DashboardNavBarDrawer/>
  </div>
    );
}

export default UserPortfolio