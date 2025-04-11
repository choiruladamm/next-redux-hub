import { TodoState } from '@/features/todos/store/todo-slice';

export interface PersistedState {
	todos: TodoState;
}

export const STORAGE_KEY = 'todo_state';

export function loadState(): PersistedState | undefined {
	try {
		if (typeof window === 'undefined') return undefined; // ✅ SSR-safe

		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return undefined;
		return JSON.parse(raw);
	} catch (error) {
		return undefined;
	}
}

export function saveState(state: PersistedState) {
	try {
		const serialized = JSON.stringify(state);
		localStorage.setItem(STORAGE_KEY, serialized);
	} catch (error) {}
}
