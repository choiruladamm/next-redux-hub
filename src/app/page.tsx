import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<div className='grid min-h-dvh place-items-center'>
			<div className='flex gap-2'>
				<Button>icikiwir</Button>
				<Input placeholder='Lagi ngulik redux...' />
			</div>
		</div>
	);
};

export default HomePage;
