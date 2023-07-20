import { combineReducers } from "redux";
import FoodsReducer from "./FoodsReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers(
    {
       foods: FoodsReducer,
       auth: AuthReducer
    }
); 