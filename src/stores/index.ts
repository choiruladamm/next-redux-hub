import { configureStore } from '@reduxjs/toolkit';

export const stores = configureStore({
	reducer: {},
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;
