
import menuIcon from '../../../assets/menuIcon.svg'
import { openNavBar } from './DashBoardNavBarDrawer';


const DashBoardHeader = () => {

    return (
        <>
        <div className="w-full  md:flex pt-5 ps-5  ">
            <div className="md:hidden flex gap-4 absolute right-2 me-4">
                <img src={menuIcon} />
                <img src={menuIcon} onClick={()=>{
                    openNavBar()
                }} />
            </div>
            <div className='w-full flex gap-2'>
            <p className="md:hidden w-[40px] h-[40px] rounded-full bg-orange-500"></p>
          
           <div className="text-sm  ">
            <p>Devjoe</p>
            <p>Updated on 21 May 2024</p>
            
         </div>
            </div>
         

         <div className="w-full mt-5 md:mt-0 md:w-[50%]  flex  justify-center  gap-1 md:flex-row md:justify-end md:items-end md:gap-5 md:me-5">

            <div className="bg-white w-[230px]  text-black flex p-1 rounded-lg" >
                <input className="outline-none w-[90%] " type="text"/>
                <p>Q</p>
            </div>
            <p className='hidden md:block mt-2 ms-10'>N</p>
         <p className="hidden md:block w-[40px] h-[40px] rounded-full bg-orange-500"></p>
          
         </div>
        </div>
       
        </>
    );
}


export default DashBoardHeader