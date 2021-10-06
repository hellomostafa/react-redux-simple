import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/IcaCreamReducer";

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducers;