'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import React from 'react';
import { addTodo } from '../store/todo-slice';

interface TodoFormProps {}

export const TodoForm: React.FC<TodoFormProps> = ({}) => {
	const dispatch = useAppDispatch();
	const [text, setText] = React.useState<string>('');

	const handleAddTodo = () => {
		const trimmed = text.trim();
		if (!trimmed) return;

		dispatch(addTodo(trimmed));
		setText('');
	};

	return (
		<div className='flex gap-2'>
			<Input
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Tambahkan todo...'
				onKeyDown={e => {
					if (e.key === 'Enter') handleAddTodo();
				}}
			/>
			<Button onClick={handleAddTodo}>Tambah</Button>
		</div>
	);
};
