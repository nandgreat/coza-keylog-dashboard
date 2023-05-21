import { createSlice } from '@reduxjs/toolkit'
import { workersList } from './workers'
import { Worker } from './worker_model'

// initialize userToken from local storage
type WorkerType = {
  loading: boolean,
  workers: Worker | null,
  error: string | null,
  success: boolean
}

const initialState = {
  loading: false,
  workers: null,
  error: null,
  success: false,
} as WorkerType

const workerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(workersList.pending, (state, action) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(workersList.fulfilled, (state, action) => {
      state.loading = false
      state.workers = action.payload.data;
      console.log(action.payload);
    });
    builder.addCase(workersList.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload
  });
  }

})

export const {  } = workerSlice.actions

export default workerSlice.reducer
