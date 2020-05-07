import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.page.html',
	styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

	loading: any;
	constructor(private  loadingController: LoadingController) {
	}

	ngOnInit() {
		this.presentLoading('cargando');
		setTimeout(() =>{
			console.log('tarea asincrona terminada');
			this.loading.dismiss();
		}, 2500);
	}

	async presentLoading(msg: string) {
		this.loading = await this.loadingController.create({
			message: msg,
			//duration: 2000
		});
		this.loading.present();
	}
}
