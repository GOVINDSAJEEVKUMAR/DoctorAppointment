import {createContext, useContext,useEffect,useReducer} from "react"


const initalState ={
    user:localStorage.getItem('user') != undefined ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role'),
    token: localStorage.getItem('token'),
}

export const authContext = createContext(initalState);

const authReducer = (state,action)=>{
    
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user:null,
                role:null,
                token:null,
            }
        case 'LOGIN_SUCCESS':
            return{
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role
            };
            case 'LOGOUT':
                return {
                    user:null,
                    role:null,
                    token:null,
                }
        default:
            return state;
    }
};

export const AuthContextProvider =({children})=>{
    const [state,dispatch] = useReducer(authReducer,initalState);
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
        localStorage.setItem('token',state.token)
        localStorage.setItem('role',state.role);
    },[state])

    return <authContext.Provider value={{
        user:state.user,
        token:state.token,
        role:state.role,
        dispatch
    }}>
        {children}
    </authContext.Provider>
}