import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin } from './authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user_data') // delete token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload;
      console.log(action.payload);
      state.userToken = action.payload.userToken
    });
    builder.addCase(userLogin.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload
    });

    // register user
    builder.addCase(registerUser.pending, (state: any) => {
      state.loading = true
      state.error = null
    }),
      builder.addCase(registerUser.fulfilled, (state: any, { payload }: any) => {
        state.loading = false
        state.success = true // registration successful
      }),
      builder.addCase(registerUser.rejected, (state: any, { payload }: any) => {
        state.loading = false
        state.error = payload
      })
  }

})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
