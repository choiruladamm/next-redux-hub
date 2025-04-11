'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AppDispatch } from '@/stores';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todo-slice';
import { useAppDispatch } from '@/hooks/use-app-dispatch';

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
			/>
			<Button
				onClick={handleAddTodo}
				onKeyDown={e => {
					if (e.key === 'Enter') handleAddTodo();
				}}
			>
				Tambah
			</Button>
		</div>
	);
};
