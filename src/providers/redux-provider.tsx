'use client';

import { stores } from '@/stores';
import React from 'react';
import { Provider } from 'react-redux';

interface ReduxProviderProps {
	children: React.ReactNode;
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
	return <Provider store={stores}>{children}</Provider>;
};
