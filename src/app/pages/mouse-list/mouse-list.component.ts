import { Component, inject, Inject } from '@angular/core';
import DataTableComponent from '../../components/data-table/data-table.component';
import { Action, getEntityProperties } from '../../models/tabla-column';
import { IMouse } from '../../models/mouse';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-mouse-list',
  imports: [DataTableComponent],
	standalone: true,	
  templateUrl: './mouse-list.component.html',
  styleUrl: './mouse-list.component.css',
})
export default class MouseListComponent {
	mouseList: IMouse[] = [];
	columns: string[] = [];
	title:string = 'Adons Eris';
	
	private productService = inject(ProductService);
	
	ngOnInit(): void {
		this.columns = getEntityProperties('keyboard');

		this.productService.obtenerMouseList().subscribe((data: IMouse[]) => {
			this.mouseList = data;
			console.log(this.mouseList);
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
