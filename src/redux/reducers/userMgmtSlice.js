import { createSlice } from "@reduxjs/toolkit";
import request from '../../services'
import endpoints from "../../services/endpoints";
import { Toast } from '../../components/toast';
import moment from "moment";

const initialState = {
    userTypes: [],
    users: []
}
export const userMgmtSlice = createSlice({
    name: "userMgmt",
    initialState,
    reducers: {
        saveUserTypes: (state, action) => {
            state.userTypes = [...action.payload];
        },
        saveUsers: (state, action) => {
            state.users = [...action.payload];
        },
        clearData: () => initialState
    }
});




export const getAllUserTypes = () => async (dispatch) => {
    try {

        request({
            url: endpoints.EndPoints.getAllUserTypes,
            method: endpoints.ApiMethods.GET,
        }).then(res => {
            dispatch(saveUserTypes(res?.data));
        }).catch(err => {
        })
    } catch (error) {

    }
}

export const deleteUserTypeById = (id) => async (dispatch) => {
    try {

        request({
            url: `${endpoints.EndPoints.deleteUserType}?_id=` + id,
            method: endpoints.ApiMethods.POST,
            data: {}
        }).then(res => {
            Toast({ type: "success", "message": res?.message });
            dispatch(getAllUserTypes());
        }).catch(err => {
        })
    } catch (error) {

    }
}



export const createUserType = (data) => {

    return new Promise((resolve, reject) => {
        request({
            url: endpoints.EndPoints.createUserType,
            method: endpoints.ApiMethods.POST,
            data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}


export const getAllUsers = () => async (dispatch) => {
    try {
        request({
            url: endpoints.EndPoints.getAllUsers,
            method: endpoints.ApiMethods.GET,
        }).then(res => {
            dispatch(saveUsers(res?.data));
        }).catch(err => {
        })
    } catch (error) {

    }
}

export const deleteUserById = (id) => async (dispatch) => {
    try {

        request({
            url: `${endpoints.EndPoints.deleteUserById}?_id=` + id,
            method: endpoints.ApiMethods.POST,
            data: {}
        }).then(res => {
            Toast({ type: "success", "message": res?.message });
            dispatch(getAllUsers());
        }).catch(err => {
        })
    } catch (error) {

    }
}



export const createUser = (data) => {

    return new Promise((resolve, reject) => {
        request({
            url: endpoints.EndPoints.createUser,
            method: endpoints.ApiMethods.POST,
            data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}




export const { saveUserTypes, saveUsers } = userMgmtSlice.actions;

export const userTypes = (state) => state.userMgmt.userTypes;
export const users = (state) => state.userMgmt.users;

export default userMgmtSlice.reducer;