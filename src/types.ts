export type TodoItem = {
	id: number;
	name: string;
	completed: boolean;
};

export type ResponseTodos = {
	data: Array<TodoItem>;
	total: number;
	next: string;
};
