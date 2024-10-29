import  { createContext, useReducer } from "react";
import { coinsInitialState, CoinsReducer } from "../reducer/CoinReducer";
import { LoginInitialState, LoginReducer } from "../reducer/LoginReducer";

export const AppContext = createContext()

const  AppContextProvider = ({children}) => {

     const  [coinsReducerState,coinsReducerDispatcher] = useReducer(CoinsReducer,coinsInitialState)
     const [loginReducerState,loginDispatcher] = useReducer(LoginReducer,LoginInitialState)
    return  (
        <AppContext.Provider value={{coinsReducerDispatcher,coinsReducerState,loginDispatcher,loginReducerState}} >
      {children}
    </AppContext.Provider>
    );
}

AppContextProvider.propTypes = {
  children:HTMLElement
}
  
export default AppContextProvider
