import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userMgmtSlice from "./userMgmtSlice";
import bookingSlice from "./bookingSlice";


const reducers = combineReducers({
    user: userSlice,
    userMgmt: userMgmtSlice,
    bookings: bookingSlice
});

export default reducers;