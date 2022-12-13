import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getTodos } from '../thunks';
import type { TodoItem } from '@atbay/types';

type Mode = 'all' | 'pending' | 'completed';

type State = {
	data: Array<TodoItem>;
	next: string;
	searchTerm: string;
	mode: Mode;
};

let newId = 1000;

const initialState: State = {
	data: [],
	next: '',
	searchTerm: '',
	mode: 'all'
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		addTodo: (state: State, action: PayloadAction<string>) => {
			state.data = [
				{
					id: newId++,
					completed: false,
					name: action.payload
				},
				...state.data
			];
		},
		removeTodo: (state: State, action: PayloadAction<number>) => {
			const argId = action.payload;
			state.data = state.data.filter(item => item.id !== argId);
		},
		updateTodo: (state: State, action: PayloadAction<{ id: number; name: string }>) => {
			const { id, name } = action.payload;
			const todoItem = state.data.find(item => item.id === id);
			if (todoItem) {
				todoItem.name = name;
			}
		},
		toggleTodo: (state: State, action: PayloadAction<number>) => {
			const id = action.payload;
			const todoItem = state.data.find(item => item.id === id);
			if (todoItem) {
				todoItem.completed = !todoItem.completed;
			}
		},
		setSearchTerm: (state: State, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
		setMode: (state: State, action: PayloadAction<Mode>) => {
			state.mode = action.payload;
		}
	},
	extraReducers: builder => {
		builder.addCase(getTodos.fulfilled, (state, action) => {
			const { data, next } = action.payload;
			state.data = next !== state.next ? [...state.data, ...data] : state.data;
			state.next = next;
		});
	}
});

export default dataSlice.reducer;
