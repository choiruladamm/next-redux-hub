import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

interface TodoState {
	todos: Todo[];
}

const initialState: TodoState = {
	todos: [],
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
	},
});

export const { addTodo, toogleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
