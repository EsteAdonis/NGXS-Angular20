import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IKeyboard } from '../models/keyboard';
import { Observable, of } from 'rxjs';
import { IMouse } from '../models/mouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor(private http: HttpClient) { }
	protected http = inject(HttpClient);

	obtenerKeyboardList(): Observable<IKeyboard[]> {
		return this.http.get<IKeyboard[]>("keyboardList.json");
	}

	obtenerMouseList(): Observable<IMouse[]> {
		return this.http.get<IMouse[]>('../mouseList.json');
	}
}
