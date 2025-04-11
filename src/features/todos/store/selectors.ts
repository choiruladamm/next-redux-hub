import { RootState } from '@/stores';
import { Todo } from './todo-slice';
import { createSelector } from '@reduxjs/toolkit';

export const getFilteredTodos = createSelector(
	(state: RootState) => state.todos,
	(todosState): Todo[] => {
		const keyword = todosState.search.toLowerCase().trim();

		let filtered = todosState.todos;

		switch (todosState.filter) {
			case 'active':
				filtered = todosState.todos.filter(t => !t.completed);
				break;
			case 'completed':
				filtered = todosState.todos.filter(t => t.completed);
				break;
		}

		return filtered.filter(t => t.text.toLowerCase().includes(keyword));
	},
);
