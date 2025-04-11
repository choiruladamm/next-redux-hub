import { RootState } from '@/stores';
import { Todo } from './todo-slice';

export const getFilteredTodos = (state: RootState): Todo[] => {
	const { todos, filter } = state.todos;

	switch (filter) {
		case 'active':
			return todos.filter(todo => !todo.completed);
		case 'completed':
			return todos.filter(todo => todo.completed);
		default:
			return todos;
	}
};
