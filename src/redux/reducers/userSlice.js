import { createSlice } from "@reduxjs/toolkit";
import request from '../../services'
import endpoints from "../../services/endpoints";
import moment from "moment";
import { Toast } from "../../components/toast";


const initialState = {
    userData: null
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUserData: (state, action) => {
            state.userData = {
                ...action.payload
            };
        },
        clearData: () => initialState
    }
});


export const loginUser = (data) =>  {

    return new Promise((resolve,reject)=>{
            let loginData = {
                ...data,
                loggedInTime: moment().format("YYYY-MM-DD'T'hh:mm:ss")
            }
            request({
                url: endpoints.EndPoints.login,
                method: endpoints.ApiMethods.POST,
                data: loginData
            }).then(res => {
                resolve(res?.data);
            }).catch(err => {
            })
        
    })
   
}


export const changePassword = (data) => async (dispatch) => {
    try {
       
        request({
            url: endpoints.EndPoints.changePassword,
            method: endpoints.ApiMethods.POST,
            data: data
        }).then(res => {
            Toast({type:"success",message:"Password updated successfully."});
            window.location.reload()
        }).catch(err => {
        })
    } catch (error) {

    }
}

export const clearUserData = (data) => async (dispatch) => {
    try {
        dispatch(clearData());
    } catch (error) {

    }
}

export const { saveUserData,clearData } = userSlice.actions;

export const userData = (state) => state.user.userData;








export default userSlice.reducer;