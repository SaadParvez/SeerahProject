import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"
import eventReducer from "../features/resultSlice"
import locationReducer from "../features/eventTypeSlice"


export default configureStore({
    reducer:{
        counter: counterReducer,
        result: eventReducer,
        location: locationReducer,
    }
})