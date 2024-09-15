import { useState } from "react";


const DashBoardNavBar = () => {
  const [activeNavState,setActiveNavState] = useState({
    dashBoardNav:{
        isActive:false
    },
    portFolioNav:{
        isActive:false
    },
    tradingNav:{
        isActive:false
    },
    watchListNav:{
        isActive:false  
    },
    acedemyNav:{
        isActive:false
    },
    profileNav:{
        isActive:false
    },
    walletNav:{
        isActive:false
    }
  })
    return (
   <div className="hidden md:block w-[250px] bg-[#212325] text-white h-dvh">
  <div className="flex w-full place-items-center justify-center mt-8">
    <img src="/"/>
    <p className="text-orange-400">Binnaces</p>
  </div>

<div className="flex w-full flex-col justify-center items-center gap-5 mt-8">
   <div className={` ${(activeNavState.dashBoardNav.isActive)? 'bg-[#FFA50D] border border-[#77ED91] text-black':''} p-2 w-[180px] text-center rounded-[25px]`} >
    <p className="cursor-pointer" onClick={()=>{
         setActiveNavState(prevState=>{
            return {
                ...prevState,
                dashBoardNav:{
                    isActive:!activeNavState.dashBoardNav.isActive
                },
                portFolioNav:{
                    isActive:false
                },
                tradingNav:{
                    isActive:false
                },
                watchListNav:{
                    isActive:false  
                },
                acedemyNav:{
                    isActive:false
                },
                profileNav:{
                    isActive:false
                },
                walletNav:{
                    isActive:false
                }

            }
         })
    }}>Dashboard</p>
   </div>

   <div  className={` ${(activeNavState.portFolioNav.isActive)? 'bg-[#FFA50D] border border-[#77ED91] text-black':''} p-2 w-[180px] text-center rounded-[25px]`}>
    <p className="cursor-pointer" onClick={()=>{
         setActiveNavState(prevState=>{
            return {
                ...prevState,
                dashBoardNav:{
                    isActive:false
                },
                portFolioNav:{
                    isActive:!activeNavState.portFolioNav.isActive
                },
                tradingNav:{
                    isActive:false
                },
                watchListNav:{
                    isActive:false  
                },
                acedemyNav:{
                    isActive:false
                },
                profileNav:{
                    isActive:false
                },
                walletNav:{
                    isActive:false
                }

            }
         })
    }}>Portfolio</p>
   </div>

   <div className={` ${(activeNavState.tradingNav.isActive)? 'bg-[#FFA50D] border border-[#77ED91] text-black':''} p-2 w-[180px] text-center rounded-[25px]`}>
    <p className="cursor-pointer" onClick={()=>{
         setActiveNavState(prevState=>{
            return {
                ...prevState,
                dashBoardNav:{
                    isActive:false
                },
                portFolioNav:{
                    isActive:false
                },
                tradingNav:{
                    isActive:!activeNavState.tradingNav.isActive
                },
                watchListNav:{
                    isActive:false  
                },
                acedemyNav:{
                    isActive:false
                },
                profileNav:{
                    isActive:false
                },
                walletNav:{
                    isActive:false
                }

            }
         })
    }}>Trading</p>
   </div>

   <div className={` ${(activeNavState.watchListNav.isActive)? 'bg-[#FFA50D] border border-[#77ED91] text-black':''} p-2 w-[180px] text-center rounded-[25px]`}>
    <p className="cursor-pointer" onClick={()=>{
         setActiveNavState(prevState=>{
            return {
                ...prevState,
                dashBoardNav:{
                    isActive:false
                },
                portFolioNav:{
                    isActive:false
                },
                tradingNav:{
                    isActive:false
                },
                watchListNav:{
                    isActive:!activeNavState.watchListNav.isActive
                },
                acedemyNav:{
                    isActive:false
                },
                profileNav:{
                    isActive:false
                },
                walletNav:{
                    isActive:false
                }

            }
         })
    }} >WatchList</p>
   </div>

   <div className={` ${(activeNavState.acedemyNav.isActive)? 'bg-[#FFA50D] border border-[#77ED91] text-black':''} p-2 w-[180px] text-center rounded-[25px]`}>
    <p className="cursor-pointer" onClick={()=>{
         setActiveNavState(prevState=>{
            return {
                ...prevState,
                dashBoardNav:{
                    isActive:false
                },
                portFolioNav:{
                    isActive:false
                },
                tradingNav:{
                    isActive:false
                },
                watchListNav:{
                    isActive:false
                },
                acedemyNav:{
                    isActive:!activeNavState.acedemyNav.isActive
                },
                profileNav:{
                    isActive:false
                },
                walletNav:{
                    isActive:false
                }

            }
         })
    }}>Acedemy</p>
   </div>

<div className={` ${(activeNavState.profileNav.isActive)? 'bg-[#FFA50D] border border-[#77ED91] text-black':''} p-2 w-[180px] text-center rounded-[25px]`}>
    <p className="cursor-pointer" onClick={()=>{
         setActiveNavState(prevState=>{
            return {
                ...prevState,
                dashBoardNav:{
                    isActive:false
                },
                portFolioNav:{
                    isActive:false
                },
                tradingNav:{
                    isActive:false
                },
                watchListNav:{
                    isActive:false
                },
                acedemyNav:{
                    isActive:false
                },
                profileNav:{
                    isActive:!activeNavState.profileNav.isActive
                },
                walletNav:{
                    isActive:false
                }

            }
         })
    }}>Profile</p>
   </div>

   <div className={` ${(activeNavState.walletNav.isActive)? 'bg-[#FFA50D] border border-[#77ED91] text-black':''} p-2 w-[180px] text-center rounded-[25px]`}>
    <p className="cursor-pointer" onClick={()=>{
         setActiveNavState(prevState=>{
            return {
                ...prevState,
                dashBoardNav:{
                    isActive:false
                },
                portFolioNav:{
                    isActive:false
                },
                tradingNav:{
                    isActive:false
                },
                watchListNav:{
                    isActive:false
                },
                acedemyNav:{
                    isActive:false
                },
                profileNav:{
                    isActive:false
                },
                walletNav:{
                    isActive:!activeNavState.walletNav.isActive
                }

            }
         })
    }}>Wallet</p>
   </div>


   <div className="absolute bottom-10 ">
    <p >Logout</p>
</div>
</div>

   </div>
    );
}

export default DashBoardNavBar