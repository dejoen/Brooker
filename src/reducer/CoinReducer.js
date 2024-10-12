
export const coinsInitialState =  []


 export  const   CoinsReducer = (state,action) =>{
      switch(action.type){
        case 'ADD_COINS_DATA':{
            state = action.payload

            return state
        }
      }
 }