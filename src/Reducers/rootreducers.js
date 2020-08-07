import { combineReducers } from "redux";
import TeslaBatterReducer from "./TeslaBatteryReducer";


const rootReducer =  combineReducers({
    BatteryReducer: TeslaBatterReducer
});
export default rootReducer;