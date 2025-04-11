import todoReducer from '@/features/todos/store/todo-slice';
import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './local-storage';

const preloadedState = loadState();

export const stores = configureStore({
	reducer: {
		todos: todoReducer,
	},
	preloadedState
});


stores.subscribe(() => {
	saveState({
		todos: stores.getState().todos
	})
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;
