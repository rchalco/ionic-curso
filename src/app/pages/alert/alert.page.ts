import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
    titleDinamyc: string;

    constructor(private alertController: AlertController) {
    }

    ngOnInit() {
        this.titleDinamyc = 'bienvenido a los alert';
    }

    async presentAlertPrompt() {
        const alert = await this.alertController.create({
            header: 'Datos!',
            subHeader: 'Ingrese sus datos personales',
            inputs: [
                {
                    name: 'nombre',
                    type: 'text',
                    placeholder: 'Ingrese su nombre'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: (data) => {
                        console.log(data);
                        this.titleDinamyc = 'bienvenido ' + data.nombre;
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }
}
