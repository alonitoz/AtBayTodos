import React, { useRef, useState } from 'react';
import { replaceMarker } from '@atbay/lib';
import { useAppDispatch } from '@atbay/hooks';
import TodoActionButtons from './todoActionButtons';
import actions from '@atbay/redux/actions';
import type { TodoItem as TodoItemType } from '@atbay/types';
import './todoItem.scss';

type TodoProps = {
	todoItem: TodoItemType;
	term: string;
};

const TodoItem = ({ todoItem, term }: TodoProps) => {
	const { id, name, completed } = todoItem;

	console.log(todoItem.name);

	const dispatch = useAppDispatch();

	const [inputValue, setInputValue] = useState(name);
	const [editable, setEditable] = useState(false);
	const ref = useRef<HTMLInputElement>(null);

	const { removeTodo, updateTodo, toggleTodo } = actions;

	const trimmedValue = inputValue.trim();

	function onEditClick() {
		setEditable(true);
	}

	return (
		<div className="todo-item-container">
			<div className={`todo-item ${completed && !editable ? 'td-completed' : ''}`}>
				{editable ? (
					<input
						type="text"
						ref={ref}
						value={inputValue}
						autoFocus
						onKeyDown={e => {
							if (e.key === 'Enter' && trimmedValue) {
								dispatch(updateTodo({ id, name: trimmedValue }));
								setEditable(false);
							}
						}}
						onBlur={() => {
							setEditable(false);
							setInputValue(name);
						}}
						onChange={e => {
							setInputValue(e.target.value);
						}}
					/>
				) : (
					<span
						onClick={() => {
							dispatch(toggleTodo(id));
						}}
						className={`todo-text ${completed && !editable ? 'completed' : ''}`}
						dangerouslySetInnerHTML={{
							__html: !!term ? replaceMarker(inputValue, term) : inputValue
						}}
					></span>
				)}
			</div>
			<TodoActionButtons onEditClick={onEditClick} onRemove={() => dispatch(removeTodo(id))} />
		</div>
	);
};

export default React.memo(TodoItem);
