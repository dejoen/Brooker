import { refreshToken } from "../features/DashBoard/service"



   



 if(localStorage.getItem('brokerUser')){
  refreshToken(JSON.parse(localStorage.getItem('brokerUser')).user.token).then(res=>{
    return res.json()
  }).then(result=>{
        if(result.status === 200){
         
            localStorage.setItem(JSON.stringify({user:result.user}))
           
           return
        }
        localStorage.removeItem('brookerUser')
       
  }).catch(()=>{
    localStorage.removeItem('brookerUser')
  })
 }




const user = ( localStorage.getItem('brokerUser')) ?   JSON.parse(localStorage.getItem('brokerUser')).user : {}

   console.log(user)
export const LoginInitialState = {user}
   




 export  const   LoginReducer = (state,action) =>{
      switch(action.type){
        case 'ADD_USER_DETAILS':{
            state = action.payload

            return state
        }
      }
 }


 