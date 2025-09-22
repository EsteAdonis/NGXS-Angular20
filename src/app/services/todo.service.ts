import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { Observable } from "rxjs";

@Injectable({
	providedIn :'root'
})
export class TodoService{
	// apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';	
	
	apiUrl = 'http://localhost:8000/todos';
	protected http = inject(HttpClient);
	// constructor(private http: HttpClient) {};

	getTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(this.apiUrl);
	}

	addTodo(todo: Todo): Observable<Todo> {
		return this.http.post<Todo>(this.apiUrl, todo);
	}

	// addTodo(todo: Todo): void {
	// 	const httpOptions = {
	// 		headers: new HttpHeaders({
	// 			'Content-Type': 'application/json'
	// 		})
	// 	};
	// 	this.http.post<Todo>(this.apiUrl, todo, httpOptions )
	// 			.subscribe({
	// 				next: res => console.log('Added:', res),
	// 				error: err => console.error('Error:', err)
	// 			});
	// }

	deleteTodo(id: string): Observable<any> {
		return this.http.delete(`${this.apiUrl}/${id}`);
	}

	updateTodo(todo: Todo): Observable<Todo> {
		return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
	}
}
