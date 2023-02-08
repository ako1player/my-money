import { createContext, useReducer } from "react";

export const AuthContext = createContext({});

export const authReducer = (state:any, action:any) =>{
    switch (action.type){

        default:
            return state;
    }
}

export const AuthContextProvider = ({children}:any) =>{

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}