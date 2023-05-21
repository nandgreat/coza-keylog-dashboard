import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { authApi } from './services/auth/authService'
import dashboardSlice from '../features/dashboard/dashboardSlice'
import workerSlice from '../features/workers/workerSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboardSlice: dashboardSlice,
    workerSlice: workerSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
