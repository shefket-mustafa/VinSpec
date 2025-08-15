import { configureStore } from "@reduxjs/toolkit";
import vinReducer from "../slices/vinSlice"; 

export const store = configureStore({
    reducer: {
        vin: vinReducer
        
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;