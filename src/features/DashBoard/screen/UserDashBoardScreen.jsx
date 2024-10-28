import { Outlet } from "react-router-dom";
import DashBoardNavBar from "../component/DashBoardNavBar";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import { getMarketCap } from "../service";


const UserDashBoardScreen = () => {

    const {coinsReducerDispatcher,coinsReducerState} = useContext(AppContext)
    
  
    
    useEffect(() => {
   
        if(!coinsReducerState.result ||    coinsReducerState.result.length ===0){

            getMarketCap()
            .then(res => {
              return res.json();
            })
            .then(result => {
    
               
                coinsReducerDispatcher({type:'ADD_COINS_DATA',payload:{
                    
                 ...coinsReducerState,
                  result
                }})
            })
            .catch(() => {});
        }

        const updateData = setInterval(()=>{
            
            getMarketCap()
            .then(res => {
              return res.json();
            })
            .then(result => {
    
               
                coinsReducerDispatcher({type:'ADD_COINS_DATA',payload:{
                    
                 ...coinsReducerState,
                  result
                }})
            })
            .catch(() => {});  
        },5*60*1000)

        return () =>{
            clearInterval(updateData)
        }
        
      }, [coinsReducerDispatcher,coinsReducerState]);
  
  
    return (

        <div className="flex">
    <DashBoardNavBar/>
     <Outlet/>
        </div>
    );
}

export default UserDashBoardScreen