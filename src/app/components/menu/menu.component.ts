import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {PagesLIst} from '../../interfaces/interfaces';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

	pagesList: Observable<PagesLIst[]>;

	constructor(private  dataService: DataService) {

	}

	ngOnInit() {
		this.pagesList = this.dataService.getMenuOptions();
	}

}
