import { Outlet } from "react-router-dom";
import DashBoardNavBar from "../component/DashBoardNavBar";

const UserDashBoardScreen = () => {

    return (

        <div className="flex">
    <DashBoardNavBar/>
     <Outlet/>
        </div>
    );
}

export default UserDashBoardScreen