import { useAppDispatch, useAppSelector } from '@atbay/hooks';
import { regexpAny } from '@atbay/lib';
import actions from '@atbay/redux/actions';
import TodoItem from './todoItem';
import './todos.scss';

const Todos = () => {
	const dispatch = useAppDispatch();

	const { data, next, searchTerm, mode } = useAppSelector(state => state.data);

	const { getTodos, setMode } = actions;

	const term = searchTerm.trim();

	const reg = regexpAny(term);

	const filteredData = data.filter(item => {
		const findByText = reg.test(item.name);
		if (!findByText) {
			return false;
		}

		if (mode === 'all') {
			return true;
		}

		const showCompleted = mode === 'completed';

		return item.completed === showCompleted;
	});

	const hasNext = !!next;

	return (
		<>
			<div className="mode-buttons">
				<button className={mode !== 'all' ? 'inactive' : ''} onClick={() => dispatch(setMode('all'))}>
					All
				</button>
				<button className={mode !== 'new' ? 'inactive' : ''} onClick={() => dispatch(setMode('new'))}>
					New
				</button>
				<button
					className={mode !== 'completed' ? 'inactive' : ''}
					onClick={() => dispatch(setMode('completed'))}
				>
					Completed
				</button>
			</div>
			{filteredData.map(item => (
				<TodoItem key={item.id} todoItem={item} term={term} />
			))}
			{hasNext && (
				<button
					className="load-button"
					onClick={() => {
						dispatch(getTodos(next));
					}}
				>
					Load more
				</button>
			)}
		</>
	);
};

export default Todos;
