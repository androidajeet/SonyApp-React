import {createStore, combineReducers, applyMiddleware} from "redux";
import cart from "./reducers/cartReducer";
import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";


const myLogger = (state) => (next) => (action) => {
     console.log("Logged Action: ", action);
    next(action);
}

export default createStore(
    combineReducers({
        math,
        user,
        cart
    }),
    {},
    applyMiddleware(myLogger)

);
