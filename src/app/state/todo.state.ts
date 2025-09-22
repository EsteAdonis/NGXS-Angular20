import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Todo } from "../models/todo";
import { inject, Injectable } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { tap } from "rxjs";
import { AddTodo, LoadTodos, DeleteTodo, UpdateTodo } from "./todo.actions";

export interface TodoStateModel {
	todos: Todo[];
	selectedTodo: Todo | null,
	loading: boolean;
	error: any;
}

@State<TodoStateModel> ({
	name: 'todo',
	defaults: {
		todos: [],
		selectedTodo: null,
		loading: false,
		error: null
	}
})

@Injectable()
export class TodoState {
	private todoService = inject(TodoService);
	
	// Want me to add form validation, unit tests, or a cheat sheet for NGXS with HTTP next

	@Selector()
	static getTodos(state: TodoStateModel): Todo[] {
		return state.todos;
	}

	@Action(LoadTodos)
	loadTodos(ctx: StateContext<TodoStateModel>) {
		return this.todoService.getTodos().pipe(
			tap({
				next: todos => ctx.patchState({todos}),
				error: err => ctx.patchState({error: err, loading: false}) 
			})
		)
	}

	@Action(AddTodo)
	addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
  ctx.patchState({ loading: true });
  return this.todoService.addTodo(action.payload).pipe(
      tap({
        next: (todo) => {
          const state = ctx.getState();
          ctx.patchState({
            todos: [...state.todos, todo],
            loading: false
          });
        },
        error: (err) => {
          ctx.patchState({ error: err, loading: false });
        }
      })
    );
  }

	@Action(DeleteTodo)
	deleteTodo(ctx: StateContext<TodoStateModel>, action: DeleteTodo ){
		return this.todoService.deleteTodo(action.id).pipe(
			tap(() => {
				const state = ctx.getState();
				const todos = state.todos.filter(t => t.id != action.id);
				ctx.patchState({todos});
			})
		)
	}

	@Action(UpdateTodo)
	updateTodo(ctx: StateContext<TodoStateModel>, action: UpdateTodo) {
		return this.todoService.updateTodo(action.payload).pipe(
			tap(updated => {
				const state = ctx.getState();
				const todos = state.todos.map(t => t.id === updated.id ? updated : t);
				ctx.patchState({todos});
			})
		)
	}

}