import { createSlice } from '@reduxjs/toolkit'
import { dashboardItems } from './dashboardActions'

import { DashboardCount } from "./dashboard_model";

export type DashboardType = {
  loading: boolean;
  dashboardCount: DashboardCount;
  error: string | null;
  success: boolean;
}

const initialState = {
  loading: false,
  dashboardCount: {},
  error: null,
  success: false,
} as DashboardType;

const dashboardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(dashboardItems.pending, (state, action) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(dashboardItems.fulfilled, (state, action) => {
      state.loading = false
      state.dashboardCount = action.payload.data.dashboard_count;
      console.log(action.payload.data.dashboard_count, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    });
    builder.addCase(dashboardItems.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload
    });
  }

})

export const { } = dashboardSlice.actions

export default dashboardSlice.reducer
