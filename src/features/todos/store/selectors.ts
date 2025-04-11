import { RootState } from '@/stores';
import { Todo } from './todo-slice';

export const getFilteredTodos = (state: RootState): Todo[] => {
	const { todos, filter, search } = state.todos;
	const keyword = search.toLowerCase().trim();

	let filtered = todos;

	switch (filter) {
		case 'active':
			filtered = todos.filter(t => !t.completed);
			break;
		case 'completed':
			filtered = todos.filter(t => t.completed);
			break;
	}

	return filtered.filter(t => t.text.toLowerCase().includes(keyword));
};
