// import { INCREASE_NUMBER } from "./types"
import { LOGIN_ACTION } from './types'

export const login = (loginData) => {

    return (dispatch) =>{
        setTimeout(()=>{

            dispatch({
                type: LOGIN_ACTION,
                payload: true
            })
        },2000)
       
    }
}