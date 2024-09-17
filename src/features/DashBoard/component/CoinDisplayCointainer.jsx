import { useEffect, useState } from "react"

import { getMarketCap } from "../service"

import chartDownIcon from "../../../assets/chartdown.svg"
import chartUpIcon from "../../../assets/chartup.svg"
const CoinDisplayContainer = () => {

    const [coinsData,setCoinsData] = useState(null)
    useEffect(()=>{
       getMarketCap().then(res=>{
        return res.json()
       }).then(result=>{
        console.log(result)
         setCoinsData(result)
       }).catch(err=>alert(err))
    },[])
    return (
        <div className=" h-[490px] w-full overflow-x-hidden">
             <table className="mx-auto table-fixed md:table-fixed border-separate border-spacing-3 md:border-spacing-5  w-full     text-center ">
                 <thead className="w-full ">
                    <tr className="w-full  ">
                        <th>Name</th>
                        <th>price</th>
                        <th className="hidden md:block"> 24H</th>
                        <th className="hidden">percentage</th>
                        <th>Market Cap</th>
                        <th className="text-start">Chart</th>
                    </tr>
                    </thead>
                    <tbody className="" >
                        
                         {
                               (coinsData) && coinsData.map((item,index)=>(
                                   <tr key={index}>
                                  
                                  
                                      <td>
                                      
                                        <div className="flex flex-wrap md:flex-row gap-2  md:w-[200px] md:ps-8">
                                        <img src={item.image} className="w-[30px] h-[30px]" />
                                      <p  className="text-sm text-start">{item.name}<span>{`(${item.symbol})`}</span></p>
                                        </div></td>
                                      <td>${item.current_price}</td>
                                      <td className={`${(String(item.price_change_24h)).startsWith('-')? 'text-red-600': 'text-green-600'} hidden md:block`}>{Number(item.price_change_24h).toFixed(4)
                                      }</td>
                                      <td className="hidden">{item.price_change_percentage_24h}</td>
                                      
                                        <td>{String(item.market_cap).slice(0,6)}</td>
                                        <td><img src={(String(item.price_change_24h).startsWith('-')? chartDownIcon:chartUpIcon)}/></td>
                                   </tr>
                                ))
                            }
                            
                      
                    </tbody>
                 
                
                </table>
           {
            /*<CoinsDisplay header={'Name'} makeVisible={true} data={coinsData}/>
            <CoinsDisplay header={'price'}  makeVisible={true} data={
               coinsData
            }/>
            <CoinsDisplay header={'24H'}  makeVisible={true} data={
                ['$0.677','$0.677','$0.677','$0.677',]
            } color={'text-green-400'}/>
            <CoinsDisplay  header={'7D'}/>
            <CoinsDisplay  header={'Market Cap'}/>
            <CoinsDisplay  header={'Chart'} makeVisible={true} image={'/src/assets/chartdown.svg'} data={  ['$0.677','$0.677','$0.677','$0.677',]}/>
       */
            }
            </div>
    
    )
}


export default CoinDisplayContainer