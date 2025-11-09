import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'keyboardsList',
		loadComponent: () => import('./pages/keyboard-list/keyboards-list.component')
	},
	{
		path: 'mouselist',
		loadComponent: () => import( './pages/mouse-list/mouse-list.component')
	},
	{
		path: '',
		redirectTo: '/keyboardsList',
		pathMatch: 'full'
	}
];
