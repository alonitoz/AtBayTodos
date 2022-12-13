import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@atbay/redux';
import App from './app';
import './root.scss';

function Root() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

export default Root;
