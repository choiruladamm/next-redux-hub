'use client';

import { useAppSelector } from '@/hooks/use-app-selector';
import React from 'react';
import { TodoItem } from '.';
import { getFilteredTodos } from '../store/selectors';

interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = ({}) => {
	const filteredTodos = useAppSelector(getFilteredTodos);
	const search = useAppSelector(state => state.todos.search);

	if (filteredTodos.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center rounded-lg border border-dashed py-8 text-center text-muted-foreground shadow-sm'>
				<div className='mb-2 text-4xl'>🤔</div>

				{search.trim() ? (
					<div className='space-y-1'>
						<p className='text-sm font-semibold sm:text-base'>
							Tidak ada hasil untuk kata kunci:
						</p>
						<p className='text-sm italic text-foreground/80'>"{search}"</p>
					</div>
				) : (
					<p className='text-sm text-foreground/80 sm:text-base'>
						Belum ada todo yang ditambahkan.
					</p>
				)}
			</div>
		);
	}

	return (
		<ul className='space-y-2'>
			{filteredTodos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
};
