import React, { useReducer } from "react"

const initialState = {
    url: "https://teamcoacher.herokuapp.com",
    token: null,
    username: null,
    manages: null,
    new: {
        title: "",
        description: "",
        date: ""
    }, 
    edit: {
        id: 0,
        title: "",
        description: "",
        date: ""
    }
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
                case "getManages":
                    newState = {...state, manages: action.payload}
                    return newState
                    break
                    case "select":
                        newState = {...state, edit: action.payload}
                        return newState
                        break
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