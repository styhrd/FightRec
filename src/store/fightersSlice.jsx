import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY
const fighterUrl = 'https://v1.mma.api-sports.io/fighters'

export const fetchByCat = createAsyncThunk('fighters/fetchbycat',
    async (categ) => {
        const response = await axios.get(fighterUrl, {
            params: {
                category: categ
            },
            headers: {
                'x-rapidapi-host': 'v1.mma.api-sports.io',
                'x-rapidapi-key': api_key
            }

        })

        return response.data.response || []
    }
)


const fightersSlice = createSlice({
    name: "fighters",
    initialState: {
        fighters: []
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchByCat.fulfilled, (state, action) => {
                state.fighters = action.payload
            })
    }
})

export default fightersSlice.reducer