import {Pipe, PipeTransform} from '@angular/core';
import {text} from 'ionicons/icons';

@Pipe({
	name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

	transform(arreglo: any[], texto: string, prop: string): any[] {
		if (texto === '') {
			return arreglo;
		}
		texto = texto.toLowerCase();

		return arreglo.filter(item => {
			return item[prop].toLowerCase().includes(texto);
		});
	}

}
