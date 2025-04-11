'use client';

import { useAppSelector } from '@/hooks/use-app-selector';
import React from 'react';
import { TodoItem } from '.';
import { getFilteredTodos } from '../store/selectors';

interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = ({}) => {
	const filteredTodos = useAppSelector(getFilteredTodos);

	if (filteredTodos.length === 0) {
		return <p className='text-gray-500'>Belum ada todo.</p>;
	}

	return (
		<ul className='space-y-2'>
			{filteredTodos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
};
