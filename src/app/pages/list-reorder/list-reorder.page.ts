import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-list-reorder',
	templateUrl: './list-reorder.page.html',
	styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

	constructor() {
	}

	pesonajes = ['ppc mayor', 'ppc menor', 'viejito', 'regorde'];

	ngOnInit() {
	}

	reorder(event) {
		console.log(event);
		const itemMover = this.pesonajes.splice(event.detail.from, 1)[0];
		this.pesonajes.splice(event.detail.to, 0, itemMover);
		event.detail.complete();
	}
	onclick(){
		console.log(this.pesonajes);
	}
}
