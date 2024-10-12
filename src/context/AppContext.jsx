import React, { createContext, useReducer } from "react";
import { coinsInitialState, CoinsReducer } from "../reducer/CoinReducer";

export const AppContext = createContext()

const  AppContextProvider = ({children}) => {

     const  [coinsReducerState,coinsReducerDispatcher] = useReducer(CoinsReducer,coinsInitialState)

    return  (
        <AppContext.Provider value={{coinsReducerDispatcher,coinsReducerState}} >
      {children}
    </AppContext.Provider>
    );
}

AppContextProvider.propTypes = {
  children:React.Children
}
  
export default AppContextProvider
