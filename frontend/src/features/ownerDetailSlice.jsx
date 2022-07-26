import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:8001/api/base/'


const initialState = {
    loading: false,
    error: false,
    owner: [],
}


export const listOwnerDetailAsync = createAsyncThunk("posts/getPosts", async (id) => {
    try {
        const res = await fetch(`${URL}owner/${id}`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
});


export const editOwnerAsync = (id) => async () => {
    console.log(id)
    try {
        const {data}  = await axios.get(`${URL}owner/${id}`);
        // dispatch(listOwnerDetailAsync());
        console.log(data)
    } catch (e) {
        console.log(e.message);
    }
};


export const ownerDetailSlice = createSlice({
    name: 'owner',
    initialState,
    reducers: {},
    extraReducers: {
        [listOwnerDetailAsync.pending]: (state) => {
            state.loading = true;
        },
        [listOwnerDetailAsync.fulfilled]: (state, { payload }) => {
            state.owner = payload;
            state.loading = false;
        },
        [listOwnerDetailAsync.rejected]: (state) => {
            state.loading = false;
        }
    }
})


export const selectAllPost = (state) => state.ownerDetailReducer
export const { createOwner, deleteOwner } = ownerDetailSlice.actions
export default ownerDetailSlice.reducer
