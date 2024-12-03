import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY
const fighterUrl = 'https://v1.mma.api-sports.io/fighters'




const fightersSlice = createSlice({
    name: "fighters",
    initialState: {
        fighters: []
    }
})

export default fightersSlice.reducer