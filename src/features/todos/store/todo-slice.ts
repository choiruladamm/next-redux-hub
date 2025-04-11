import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

interface TodoState {
	todos: Todo[];
	filter: Filter;
	search: string;
}

const initialState: TodoState = {
	todos: [],
	filter: 'all',
	search: '',
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.todos.push({
				id: crypto.randomUUID(),
				text: action.payload,
				completed: false,
			});
		},
		toogleTodo: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find(t => t.id === action.payload);
			if (todo) todo.completed = !todo.completed;
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(t => t.id !== action.payload);
		},
		editTodo: (state, action: PayloadAction<Omit<Todo, 'completed'>>) => {
			const todo = state.todos.find(t => t.id === action.payload.id);
			if (todo) todo.text = action.payload.text;
		},
		setFilter: (state, action: PayloadAction<Filter>) => {
			state.filter = action.payload;
		},
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
	},
});

export const {
	addTodo,
	toogleTodo,
	deleteTodo,
	editTodo,
	setFilter,
	setSearchQuery,
} = todoSlice.actions;
export default todoSlice.reducer;
