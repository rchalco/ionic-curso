import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'date-time',
	templateUrl: './date-time.page.html',
	styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

	FecNac: Date;
	customPickerOption: any;
	customDate: Date;

	constructor() {
		this.FecNac = new Date();
	}
	ngOnInit() {
		this.customPickerOption = {
			buttons: [{
				text: 'Save',
				handler: (event) =>{
					console.log(event);
					console.log('***date');
					this.customDate = new Date(event.year.value, event.month.value, event.day.value,0,0,0,0);
					console.log(this.customDate);
				}
			}, {
				text: 'Log',
				handler: () => {
					console.log('Clicked Log. Do not Dismiss.');
					return false;
				}
			}]
		}
	}

	cambiarFecha(event) {
		console.log(event);
		console.log(event.detail.value);
	}
}
