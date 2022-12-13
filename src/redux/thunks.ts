import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ResponseTodos } from '@atbay/types';
import { getTodos as apiGetTodos } from '@atbay/services/api';

export const getTodos = createAsyncThunk<ResponseTodos, string>('get/todos', (id: string) => {
	return apiGetTodos(id);
});
