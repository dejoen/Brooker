import React, { useContext} from "react";
import menuIcon from "../../../assets/menuIcon.svg";
import { openNavBar } from "./DashBoardNavBarDrawer";
import { AppContext } from "../../../context/AppContext";
import { Navigate } from "react-router-dom";


const DashBoardHeader = () => {
  const { loginReducerState} = useContext(AppContext);
 
  

  return (
    <React.Fragment>
      {loginReducerState.user
        ? <div className="w-full  md:flex pt-5 ps-5  ">
            <div className="md:hidden flex gap-4 absolute right-2 me-4">
              <img src={menuIcon} />
              <img
                src={menuIcon}
                onClick={() => {
                  openNavBar();
                }}
              />
            </div>
            <div className="  w-full flex gap-2">
              {loginReducerState.user && loginReducerState.user.profilePicture
                ? <img
                    className="block md:hidden w-[40px] h-[40px] rounded-full "
                    src={`data:image/jpg;base64,${loginReducerState.user
                      .profilePicture}`}
                  />
                : <p className="hidden md:block w-[40px] h-[40px] rounded-full bg-orange-500" />}
              <div className="text-sm  ">
                <p>
                  {loginReducerState.user
                    ? `Welcome ${loginReducerState.user
                        .firstName} ${loginReducerState.user.lastName}`
                    : "Welcome User"}
                </p>
                <p>Updated on 21 May 2024</p>
              </div>
            </div>

            <div className="w-full mt-5 md:mt-0 md:w-[50%]  flex  justify-center  gap-1 md:flex-row md:justify-end md:items-end md:gap-5 md:me-5">
              <div className="bg-white w-[230px]  text-black flex p-1 rounded-lg">
                <input className="outline-none w-[90%] " type="text" />
                <p>Q</p>
              </div>
              <p className="hidden md:block mt-2 ms-10">N</p>
              <div className="hidden md:block">
                {loginReducerState.user && loginReducerState.user.profilePicture
                  ? <img
                      className="w-[40px] h-[40px] rounded-full "
                      src={`data:image/jpg;base64,${loginReducerState.user
                        .profilePicture}`}
                    />
                  : <p className="hidden md:block w-[40px] h-[40px] rounded-full bg-orange-500" />}
              </div>
            </div>
          </div>
        : <Navigate to={"/loginUser"} replace />}
    </React.Fragment>
  );
};

export default DashBoardHeader;
