'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import React from 'react';
import { deleteTodo, Todo, toogleTodo } from '../store/todo-slice';
import { cn } from '@/lib/utils';

export const TodoItem: React.FC<Todo> = ({ id, text, completed }) => {
	const dispatch = useAppDispatch();

	return (
		<div
			className={cn([
				'flex items-center justify-between rounded-xl border bg-white',
				'px-4 py-3 shadow-sm transition-all hover:shadow-md',
			])}
		>
			<div className='flex items-center gap-2'>
				<Checkbox
					checked={completed}
					onCheckedChange={() => dispatch(toogleTodo(id))}
				/>
				<span
					className={cn([
						'text-sm transition-colors sm:text-base',
						completed && 'line-through',
					])}
				>
					{text}
				</span>
			</div>
			<Button
				variant='destructive'
				size='sm'
				onClick={() => dispatch(deleteTodo(id))}
			>
				Hapus
			</Button>
		</div>
	);
};
