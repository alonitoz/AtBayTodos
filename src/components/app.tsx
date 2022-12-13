import { useEffect } from 'react';
import { useAppDispatch } from '@atbay/hooks';
import actions from '@atbay/redux/actions';
import { INITIAL_URL } from '@atbay/variables/constants';
import TopBar from './top-bar';
import Todos from './todos';

import './app.scss';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(actions.getTodos(INITIAL_URL));
	}, []);

	return (
		<div className="app-container">
			<h1>My Todo-s</h1>
			<TopBar />
			<Todos />
		</div>
	);
};

export default App;
