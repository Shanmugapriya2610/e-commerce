import { createStore } from "redux";
import { reducers } from "../../redux/reducer";
import persistReducers from "./persistReducers";
import { persistStore } from "redux-persist";

// const persistant = persistReducer();
export const store = createStore(persistReducers(reducers));

export const persistor = persistStore(store);
