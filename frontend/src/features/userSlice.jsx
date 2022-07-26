import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:8001/api/user/'


const initialState = {
    loading: false,
    error: false,
    users: [],
}


export const listUserAsync = createAsyncThunk("posts/getPosts", async () => {
    try {
        const res = await fetch(`${URL}list/`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
});


export const createUserAsync = (data) => async (dispatch) => {
    try {
        await axios.post(`${URL}register/`, data);
        dispatch(listUserAsync());
    } catch (e) {
        console.log(e.message);
    }
};


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [listUserAsync.pending]: (state) => {
            state.loading = true;
        },
        [listUserAsync.fulfilled]: (state, { payload }) => {
            state.users = payload;
            state.loading = false;
        },
        [listUserAsync.rejected]: (state) => {
            state.loading = false;
        },
        [createUserAsync.fulfilled]: (state, { payload }) => {
            state.users = payload;
            state.loading = false;
        },
        [createUserAsync.rejected]: (state) => {
            state.loading = false;
        }
    }
})

// export const listUserAsync = () => async (dispatch) => {
//     try {
//       const response = await axios.get(`${URL}`);
//       dispatch(listUser(response.data));
//     } catch (err) {
//       throw new Error(err);
//     }
//   };




export const selectAllPost = (state) => state.userReducer
export const { createUser, deleteUser } = userSlice.actions
export default userSlice.reducer
