import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@atbay/hooks';
import actions from '@atbay/redux/actions';
import Input from '@atbay/components/input';
import './top-bar.scss';

const TopBar = () => {
	const searchTerm = useAppSelector(state => state.data.searchTerm);
	const dispatch = useAppDispatch();
	const [newTodo, setNewTodo] = useState('');

	const { addTodo, setSearchTerm } = actions;

	const trimmedTodo = newTodo.trim();

	return (
		<>
			<div className="add-todo">
				<Input placeholder="Add todo..." onChange={e => setNewTodo(e.target.value)} value={newTodo} />
				<button
					disabled={!trimmedTodo}
					onClick={() => {
						dispatch(addTodo(trimmedTodo));
						setNewTodo('');
					}}
				>
					ADD
				</button>
			</div>
			<div className="search-todo">
				<Input
					value={searchTerm}
					placeholder="Search to do"
					onChange={e => {
						dispatch(setSearchTerm(e.target.value));
					}}
				/>
			</div>
		</>
	);
};

export default TopBar;
