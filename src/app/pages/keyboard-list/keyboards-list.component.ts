import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { IKeyboard } from '../../models/keyboard';
import { Action, getEntityProperties } from '../../models/tabla-column';
import TableDataComponent from '../../components/data-table/data-table.component';

@Component({
  selector: 'app-keyboards-list',
  imports: [TableDataComponent],
	standalone: true,
  templateUrl: './keyboards-list.component.html',
  styleUrl: './keyboards-list.component.css',
})
export default class KeyboardsListComponent implements OnInit {
	keyboardList: IKeyboard[] = [];
	columns: string[] = [];
	title:string = 'Adons Eris';
	
	private productService = inject(ProductService);
	
	ngOnInit(): void {
		this.columns = getEntityProperties('keyboard');

		this.productService.obtenerKeyboardList().subscribe((data: IKeyboard[]) => {
			this.keyboardList = data;
			console.log(this.keyboardList);
		})
	}

	onAction(action: Action): void {
		if (action.action == 'Edit'){
			this.edit(action.fila);
		} else if (action.action == 'Delete') {
			this.delete(action.fila?.nombre!);
		}
	}

	edit(object: any) {
		console.log('Edit: ', object);
	}

	delete(object: string) {
		console.log("Deleting: ", object)
	}
}
