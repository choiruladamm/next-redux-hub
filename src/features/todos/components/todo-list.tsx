'use client';

import { useAppSelector } from '@/hooks/use-app-selector';
import { RootState } from '@/stores';
import React from 'react';
import { useSelector } from 'react-redux';

interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = ({}) => {
	const todos = useAppSelector(state => state.todos.todos);

	if (todos.length === 0) {
		return <p className='text-gray-500'>Belum ada todo.</p>;
	}

	return (
		<ul className='space-y-2'>
			{todos.map(todo => (
				<li key={todo.id} className='rounded border px-4 py-2'>
					{todo.text}
				</li>
			))}
		</ul>
	);
};
