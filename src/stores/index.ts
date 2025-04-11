import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '@/features/todos/store/todo-slice';

export const stores = configureStore({
	reducer: {
		todos: todoReducer,
	},
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;
