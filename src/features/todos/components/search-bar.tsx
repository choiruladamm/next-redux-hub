'use client';

import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import React from 'react';
import { setSearchQuery } from '../store/todo-slice';

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
	const dispatch = useAppDispatch();
	const search = useAppSelector(state => state.todos.search);

	return (
		<Input
			placeholder='Cari todo...'
			value={search}
			onChange={e => dispatch(setSearchQuery(e.target.value))}
			className='w-full'
		/>
	);
};
