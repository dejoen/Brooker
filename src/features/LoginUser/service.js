import { Constants } from "../../utils/Constant"

const loginUser = async(data) =>{
   
    
    return fetch(`${Constants.BASE_URL}/login`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }) 
}


export {loginUser}