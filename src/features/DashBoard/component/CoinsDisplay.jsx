/* eslint-disable react/prop-types */

const CoinsDisplay = ({header,makeVisible,data,color,image}) =>{
    return (
    <div className={`${(makeVisible)?'block':'hidden'} md:block w-[45%]  h-full`}>
      <p className="m-2 text-sm">{header}</p>
      <div className="mt-3 me-2">
        {
         (data) && data.map((item,index)=>(
          <div className="m-5" key={index}>
            {
            
              (image)? <img className="m-1" key={index} src={image}/> :  <p  key={index} className={`${(color) ?`${color}`:''}  m-2`}>{ 
                 (header ==="Name") &&  <p className="flex gap-1"><img className="w-[30px] h-[30px]" src={item.image}/>  <span>{item.name+" "+`(${item.symbol})`}</span> </p>|| (header==='price') && "$"+item.current_price
               
                
                }</p>
     
            }
          </div>      
          ))
        }
      </div>
    </div>
    )
}

export default  CoinsDisplay