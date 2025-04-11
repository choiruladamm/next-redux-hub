import dynamic from 'next/dynamic';

const TodoPage = dynamic(() => import('@/features/todos/pages/todo-page'), {
	ssr: false,
});

export default TodoPage;
