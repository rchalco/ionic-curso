import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.page.html',
	styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
	pagesList: PagesLIst[] = [
		{
			name: 'alert',
			icon: 'alarm',
			redirectTo: '/alert'
		},
		{
			name: 'action-sheet',
			icon: 'warning',
			redirectTo: '/action-sheet'
		},
		{
			name: 'avatar',
			icon: 'person',
			redirectTo: '/avatar'
		},
		{
			name: 'botones',
			icon: 'square',
			redirectTo: '/botones'
		},
		{
			name: 'card',
			icon: 'card',
			redirectTo: '/card'
		},
		{
			name: 'check',
			icon: 'checkbox',
			redirectTo: '/check'
		},
		{
			name: 'dateTime',
			icon: 'calendar',
			redirectTo: '/date-time'
		},
		{
			name: 'fabe',
			icon: 'car',
			redirectTo: '/fabe'
		},
		{
			name: 'grid',
			icon: 'grid',
			redirectTo: '/grid'
		},
		{
			name: 'infinite scroll',
			icon: 'infinite',
			redirectTo: '/infinite-scroll'
		},
		{
			name: 'input-forms',
			icon: 'hammer',
			redirectTo: '/input'
		},
		{
			name: 'list-sliding',
			icon: 'list',
			redirectTo: '/list'
		},
		{
			name: 'list-reorder',
			icon: 'list',
			redirectTo: '/list-reorder'
		},
		{
			name: 'loading',
			icon: 'refresh-circle',
			redirectTo: '/loading'
		}
	];

	constructor() {
	}

	ngOnInit() {
	}

}

export interface PagesLIst {
	name: string;
	icon: string;
	redirectTo: string;
}
