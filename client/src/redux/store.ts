import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/app';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
	reducer: {
		app: appReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch