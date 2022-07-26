import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:8001/api/base/'


const initialState = {
    loading: false,
    error: false,
    owners: [],
}


export const listOwnerAsync = createAsyncThunk("posts/getPosts", async () => {
    try {
        const res = await fetch(`${URL}owners/`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
});


export const createOwnerAsync = (data) => async (dispatch) => {
    try {
        await axios.post(`${URL}owners/`, data);
        dispatch(listOwnerAsync());
    } catch (e) {
        console.log(e.message);
    }
};


export const editOwnerAsync = (date) => async (dispatch) => {
    try {
        const {data}  = await axios.get(`${URL}owner/${date.id}`, date);
        // dispatch(listOwnerAsync());
        console.log(data)
    } catch (e) {
        console.log(e.message);
    }
};


export const deleteOwnerAsync = (id) => async (dispatch) => {
    try {
        await axios.delete(`${URL}owner/${id}`);
        dispatch(listOwnerAsync());
    } catch (e) {
        console.log(e.message);
    }
};


export const ownerSlice = createSlice({
    name: 'owners',
    initialState,
    reducers: {},
    extraReducers: {
        [listOwnerAsync.pending]: (state) => {
            state.loading = true;
        },
        [listOwnerAsync.fulfilled]: (state, { payload }) => {
            state.owners = payload;
            state.loading = false;
        },
        [listOwnerAsync.rejected]: (state) => {
            state.loading = false;
        },
        [createOwnerAsync.fulfilled]: (state, { payload }) => {
            state.owners = payload;
            state.loading = false;
        },
        [createOwnerAsync.rejected]: (state) => {
            state.loading = false;
        }
    }
})


export const selectAllPost = (state) => state.ownerReducer
export const { createOwner, deleteOwner } = ownerSlice.actions
export default ownerSlice.reducer
