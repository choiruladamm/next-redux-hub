'use client';

import { useAppSelector } from '@/hooks/use-app-selector';
import React from 'react';
import { TodoItem } from '.';

interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = ({}) => {
	const todos = useAppSelector(state => state.todos.todos);

	if (todos.length === 0) {
		return <p className='text-gray-500'>Belum ada todo.</p>;
	}

	return (
		<ul className='space-y-2'>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
};
