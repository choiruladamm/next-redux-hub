import React from 'react';
import { FilterBar, TodoForm, TodoList } from '../components';

interface TodoPageProps {}

const TodoPage: React.FC<TodoPageProps> = ({}) => {
	return (
		<section className='mx-auto max-w-md space-y-4 p-4'>
			<h1 className='text-2xl font-bold'>Todo App</h1>
			<FilterBar />
			<TodoForm />
			<TodoList />
		</section>
	);
};

export default TodoPage;
