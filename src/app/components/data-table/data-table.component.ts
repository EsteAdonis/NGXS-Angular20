import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../models/tabla-column';

@Component({
  selector: 'app-data-table',
  imports: [],
	standalone: true, 	
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export default class DataTableComponent {
	title='';
	columns: string[]=[];
	dataSource: any = [];

	@Input() set value(titleName: string) { this.title = titleName}
	@Input() set columnas(columns: string[]) { this.columns = columns}
	@Input() set data(data: any) {this.dataSource = data}

	@Output() action: EventEmitter<Action> = new EventEmitter(); 

	onAction(action: string, row?: any) {
		this.action.emit({action: action, fila: row })
	}
}