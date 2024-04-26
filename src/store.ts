import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "slices/AuthSlice"
import adminReducer from "slices/AdminSlice"

export default configureStore({
  reducer: combineReducers({
    mainData: authReducer,
    adminData: adminReducer
  }),
})
