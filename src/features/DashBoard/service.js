import { Constants } from "../../utils/Constant"

export const  getMarketCap = async () => {
     return  fetch(`${Constants.COIN_BASE_URL}/coins/markets?vs_currency=usd`,{
        method:'GET',
        headers:{
            "Content-Type":'application/json',
            
        }
     })
}