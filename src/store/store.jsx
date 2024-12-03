import { configureStore } from "@reduxjs/toolkit";
import fightersReducer from './fightersSlice'

const store = configureStore({
    reducer: {
        fighters: fightersReducer
    }
})

export default store