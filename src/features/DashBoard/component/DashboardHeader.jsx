
import menuIcon from '../../../assets/menuIcon.svg'


const DashBoardHeader = () => {

    return (
        <div className="w-full  md:flex pt-5 ps-5  ">
            <div className="md:hidden absolute right-2 me-4">
                <img src={menuIcon} />
            </div>
         <div className="text-sm w-1/2 ">
            <p>Devjoe</p>
            <p>Updated on 21 May 2024</p>
            
         </div>

         <div className="w-full mt-5  md:w-[50%]  flex  justify-center  gap-1 md:flex-row md:justify-end md:items-end md:gap-5 md:me-5">

            <div className="bg-white w-[200px]  text-black flex p-1 rounded-lg" >
                <input className="outline-none" type="text"/>
                <p>Q</p>
            </div>
            <p>N</p>
         <p className="w-[40px] h-[40px] rounded-full bg-orange-500"></p>
           <div className="text-sm w-[40px] h-[40px] flex items-center">
           
          
           </div>
         </div>
        </div>
    );
}


export default DashBoardHeader