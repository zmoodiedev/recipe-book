import { combineReducers } from "redux";
import { UserSlice } from "./UserSlice";

export const rootReducer = combineReducers({
    user: UserSlice.reducer,
});