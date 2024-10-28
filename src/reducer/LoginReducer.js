

     

   

export const LoginInitialState =  {}


 export  const   LoginReducer = (state,action) =>{
      switch(action.type){
        case 'ADD_USER_DETAILS':{
            state = action.payload

            return state
        }
      }
 }


 