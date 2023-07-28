import {LOGIN_ACTION } from "../actions/types";


const initialState = {
    isAuthenticated: false
};


const authenticationReducer  = (state = initialState, action) =>{
    switch(action.type) {
        case LOGIN_ACTION : 
        return {
            isAuthenticated: action.payload
        };
        default : return state
    }
}

export default authenticationReducer;