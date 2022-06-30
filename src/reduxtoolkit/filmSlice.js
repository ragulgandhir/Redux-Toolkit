import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    films: [],
    error: '',
}

// Generate pending, fulfilled, rejected action types using createAsyncThunk
export const fetchFilms = createAsyncThunk('film/fetchFilms', () => {
    return axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.data)

})

const filmSlice = createSlice({
    name: 'film',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchFilms.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchFilms.fulfilled, (state, action) =>{
            state.loading = false
            state.films = action.payload
            state.error = ''
        })
        builder.addCase(fetchFilms.rejected, (state, action) =>{
            state.loading = false
            state.films = []
            state.error = action.error.message
        })
    },
})

export default filmSlice.reducer