import React, { useReducer } from "react"

const initialState = {
    url: "http://teamcoacher.herokuapp.com",
    token: null,
    username: null
}

const reducer = (state, action) => {

    let newState;
    switch (action.type){
        case "auth":
            newState = { ...state, ...action.payload}
            return newState;
            break
            case "logout":
                newState ={ ...state, token: null, username: null}
                window.localStorage.removeItem("auth")
                return newState
            default:
                return state
                break
    }
}

const AppContext = React.createContext(null)

export const AppState = (props) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>
        {props.children}
    </AppContext.Provider>

}

//useAppState Hook

export const useAppState = () => {
    return React.useContext(AppContext)
}