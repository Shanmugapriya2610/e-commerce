// import { HomeActionType } from "service/actionType"

const initialState = {
  userDetail: {
    mobileNumber: "",
    password: "",
  },
  patientId: "",

  registerUser: {},
  mobileNumber: "",
  appointmentCancelId: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_DETAIL":
      console.log(payload, "payloaddd");
      return {
        ...state,
        userDetail: { ...payload },
      };

    case "PATIENT_ID":
      return {
        ...state,
        patientId: payload,
      };
    case "REGISTER_USER":
      return {
        ...state,
        registerUser: { ...payload },
      };
    case "MOBILE_NUMBER_LOGIN":
      console.log(payload, "nummmmm");
      return {
        ...state,
        mobileNumber: payload,
      };
    case "CANCEL_APPOINTMENT_NUMBER":
      console.log(payload, "nummmmm");
      return {
        ...state,
        appointmentCancelId: payload,
      };
    case "GET_USER_PROFILE_DATA":
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};
