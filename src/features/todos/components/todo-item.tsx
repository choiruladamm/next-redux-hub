'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { cn } from '@/lib/utils';
import React from 'react';
import { deleteTodo, editTodo, Todo, toogleTodo } from '../store/todo-slice';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';

export const TodoItem: React.FC<Todo> = ({ id, text, completed }) => {
	const dispatch = useAppDispatch();
	const [isEditing, setIsEditing] = React.useState<boolean>(false);
	const [editText, setEditText] = React.useState<string>(text);

	const handleSave = () => {
		const trimmed = editText.trim();
		if (!trimmed) return;

		dispatch(editTodo({ id, text: trimmed }));
		setIsEditing(false);
	};

	return (
		<div
			className={cn([
				'flex items-center justify-between rounded-xl border bg-white',
				'px-4 py-3 shadow-sm transition-all hover:shadow-md',
			])}
		>
			<div className='flex w-full items-center gap-2'>
				<Checkbox
					checked={completed}
					onCheckedChange={() => dispatch(toogleTodo(id))}
				/>

				{isEditing ? (
					<input
						value={editText}
						onChange={e => setEditText(e.target.value)}
						onBlur={handleSave}
						onKeyDown={e => {
							if (e.key === 'Enter') handleSave();
							if (e.key === 'Escape') {
								setEditText(text);
								setIsEditing(false);
							}
						}}
						autoFocus
						className='w-full border-none bg-transparent pr-3 outline-none focus:ring-0'
						placeholder='Type todo...'
					/>
				) : (
					<span
						onClick={() => setIsEditing(true)}
						className={cn([
							'text-sm transition-colors hover:underline sm:text-base',
							completed && 'line-through',
						])}
					>
						{text}
					</span>
				)}
			</div>
			<Button
				variant='destructive'
				size='icon'
				className='rounded-full h-8'
				onClick={() => dispatch(deleteTodo(id))}
			>
				<Trash2 className='size-4' />
			</Button>
		</div>
	);
};
