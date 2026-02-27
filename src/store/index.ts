import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
// import {apiSlice} from '../store/apiSlice'
import dataReducer from './dataSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
    },
//     reducer: {
//     auth: authReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;