import { refreshToken } from "../features/DashBoard/service"



   
let getUser = async () =>{
  return new Promise((resolve,reject)=>{
    
    refreshToken(localStorage.getItem('token')).then(res=>{
      return res.json()
    }).then(result=>{
          if(result.status === 200){
           
             resolve(result.user)
             
             return
          }
          resolve({})
         
    }).catch(()=>{
        reject({})
    })
  })
}


let user = {}
if(localStorage.getItem('token')){
  try {
     user= await     getUser()
  
  } catch (error) {
    user = {}
  }
 
}




   
export const LoginInitialState = (user.id) ? {user} :{}
   




 export  const   LoginReducer = (state,action) =>{
      switch(action.type){
        case 'ADD_USER_DETAILS':{
            state = action.payload

            return state
        }
      }
 }


 