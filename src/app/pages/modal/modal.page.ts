import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalInfoPage} from '../modal-info/modal-info.page';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.page.html',
	styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

	constructor(private  modalController: ModalController) {
	}

	ngOnInit() {
	}

	async abrirModal() {
		console.log('ingresando al metodo modal');
		const modal = await this.modalController.create({
			component: ModalInfoPage,
			componentProps: {
				'nombre': 'Ruben Chalco',
				'pais': 'Bolivia'
			}
		});
		await modal.present();
		const {data} = await modal.onDidDismiss();
		console.log('retorno de datos del modal', data);
	}
}
