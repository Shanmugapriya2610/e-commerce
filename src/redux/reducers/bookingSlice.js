import { createSlice } from "@reduxjs/toolkit";
import request from '../../services'
import endpoints from "../../services/endpoints";

let initialState = {
    dashboard: {
        pieData: [],
        barChart: [],
    },
    allBookings: [],
    totalPages : 0,
    bookingDetails:{}
}

export const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        saveDashboardData: (state, action) => {
            state.dashboard = {
                pieData: [...action.payload?.pieData],
                barChart: [...action.payload?.barData],
            };
        },
        saveAllBookings: (state, action) => {
            state.allBookings = [...action.payload];
        },
        saveTotalPages: (state, action) => {
            state.totalPages = action.payload
        },
        saveBookingDetails: (state, action) => {
            state.bookingDetails = {...action.payload}
        },
        clearData: () => initialState
    }
});


export const getDashboardData = () => async (dispatch) => {
    try {
        request({
            url: endpoints.EndPoints.dashboard,
            method: endpoints.ApiMethods.GET
        }).then(res => {
            dispatch(saveDashboardData(res));
        }).catch(err => {
        })
    } catch (error) {
    }
}

export const getAllMyBookings = (params) => async (dispatch) => {
    try {
        request({
            url: endpoints.EndPoints.getAllBookings,
            method: endpoints.ApiMethods.GET,
            params:{...params},
            isLoader: params["search"] ? false : true
        }).then(res => {
            dispatch(saveAllBookings(res?.data?.list))
            dispatch(saveTotalPages(res?.data?.totalPages))
        }).catch(err => {
        })
    } catch (error) {
    }
}


export const bookingsDetailsById = (id) => async (dispatch) => {
    try {
        request({
            url: `${endpoints.EndPoints.getBookingDetailsById}?id=${id}`,
            method: endpoints.ApiMethods.GET
        }).then(res => {
            dispatch(saveBookingDetails(res?.data))
        }).catch(err => {
        })
    } catch (error) {
    }
}



export const { saveDashboardData,saveAllBookings,saveTotalPages,saveBookingDetails } = bookingSlice.actions;

export const dashboardData = (state) => state.bookings?.dashboard;
export const allBookingsData = (state) => state.bookings?.allBookings;
export const totalPage = (state) => state.bookings?.totalPages;
export const bookingDetailsData = (state) => state.bookings?.bookingDetails;

export default bookingSlice.reducer;