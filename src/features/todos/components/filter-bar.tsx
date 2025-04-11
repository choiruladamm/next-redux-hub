'use client';

import React from 'react';
import { Filter, setFilter } from '../store/todo-slice';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { Button } from '@/components/ui/button';

interface FilterBarProps {}

const filter: Filter[] = ['all', 'active', 'completed'];

export const FilterBar: React.FC<FilterBarProps> = ({}) => {
	const dispatch = useAppDispatch();
	const currentFilter = useAppSelector(state => state.todos.filter);

	return (
		<div className='flex items-center gap-2'>
			{filter.map(f => (
				<Button
					key={f}
					size='sm'
					variant={f === currentFilter ? 'default' : 'outline'}
					onClick={() => dispatch(setFilter(f))}
					className='capitalize'
				>
					{f}
				</Button>
			))}
		</div>
	);
};
