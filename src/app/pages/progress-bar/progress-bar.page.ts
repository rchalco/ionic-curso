import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-progress-bar',
	templateUrl: './progress-bar.page.html',
	styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

	procentaje = 0.00;

	constructor() {
	}

	ngOnInit() {
	}

	cambioValor(event) {
		console.log(event);
		this.procentaje = event.detail.value / 100;
	}

}
