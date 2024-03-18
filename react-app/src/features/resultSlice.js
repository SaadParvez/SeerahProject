import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name:'result',
    initialState:{
       event: ''
    },

    reducers: {
        changeEvent: (state, action) =>{
            console.log(action)
            state.event= action.payload
        },
        
    }
})

export const { changeEvent } = eventSlice.actions

export default eventSlice.reducer