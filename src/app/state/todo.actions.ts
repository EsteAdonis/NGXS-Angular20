import { Todo } from "../models/todo";

export class LoadTodos {
	static readonly type ='[Todo] Get All Todos';
}

export class AddTodo {
	static readonly type ='[Todo] Add Todo';
	constructor(public payload: Todo) {};
}

export class UpdateTodo {
	static readonly type ='[Todo] Update Todo';
	constructor(public payload: Todo) {};
}

export class DeleteTodo {
	static readonly type ='[Todo] Delete Todo';
	constructor(public id: string) {};
}

export class SetSelectedTodo {
	static readonly type ='[Todo] Set Selected Todo';
	constructor(public payload: Todo) {};
}