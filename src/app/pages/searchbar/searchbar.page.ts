import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {albums} from 'ionicons/icons';

@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.page.html',
	styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
	albums: any[] = [];
	textoBusacar = '';

	constructor(private dataService: DataService) {
	}

	ngOnInit() {
		this.dataService.getAlbums().subscribe(resul => {
			console.log(resul);
			this.albums = resul;
		});
	}

	buscar(event) {
		this.textoBusacar = event.detail.value;
	}
}
