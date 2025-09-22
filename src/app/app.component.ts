import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { TodoState } from './state/todo.state';
import { Store } from '@ngxs/store';
import { AddTodo, LoadTodos, DeleteTodo, UpdateTodo} from './state/todo.actions';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
	standalone: true, 
  template: `
	  <h3>Todos (NGXS Standalone)</h3>
		<br />
    <input id="inputTodo" [(ngModel)]="todoText" placeholder="Add todo" type="text"/>
    <button type="button" id="btn-addTodo" (click)="addTodo()" >Add</button>
    <ul>
			@for (todo of todos$ | async ; track $index) {
				<li >
					{{ todo.title }} - {{ todo.completed ? '✅' : '❌' }} 
					<button (click)="toggle(todo)">&nbsp; &nbsp; Toggle</button>
					<button (click)="deleteTodo(todo.id)">&nbsp; &nbsp; Delete</button>					
				</li>
			}
    </ul>
		<router-outlet />
  `	
})
export class App implements OnInit {
	private store = inject(Store);
  protected title = 'NGXS-Angular20';
	todoText = '';

	 // Should become the following
  todos$: Observable<Todo[]> = this.store.select(TodoState.getTodos);

	ngOnInit() {
		this.store.dispatch(new LoadTodos());		
	}

	addTodo() {
		const todo: Todo = {
			userId: 1000,
			id: Math.floor(Math.random() * 1000).toString(),
			title: this.todoText.trim(),
			completed: false
		};

		if (this.todoText.trim()) {
			this.store.dispatch(new AddTodo(todo));
			this.todoText = '';
		}
	}

	deleteTodo(id: string) {
		this.store.dispatch(new DeleteTodo(id));
	}

	toggle(todo: Todo){
		this.store.dispatch(new UpdateTodo({...todo, completed: !todo.completed}));
	}

}
