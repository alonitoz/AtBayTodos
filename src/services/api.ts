import type { ResponseTodos } from '../types';

const handler = async <T>(
	path: string,
	options: RequestInit = {}
): Promise<T> => {
	const response = await fetch(
		path,
		Object.assign(
			{
				method: 'get',
				headers: {
					'Content-Type': 'application/json',
				},
			},
			options
		)
	);

	const value = await response.json();

	if (response.ok) {
		return value;
	} else {
		throw new Error(value);
	}
};

export const getTodos = (id: string) => handler<ResponseTodos>(id);
