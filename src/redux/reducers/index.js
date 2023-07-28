import authenticationReducer from "./authentication";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    authenticationReducer
})

export default rootReducer;