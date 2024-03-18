import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
       date: new Date()
    },

    reducers: {
        changeDate: (state, action) =>{
            console.log(action)
            state.date= action.payload
        }
    }
})

export const { changeDate } = counterSlice.actions

export default counterSlice.reducer