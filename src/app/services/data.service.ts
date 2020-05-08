import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PagesLIst} from '../interfaces/interfaces';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private  httpClient: HttpClient) {
	}

	getUsers(){
		return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
	}

	getMenuOptions(){
		return this.httpClient.get<PagesLIst[]>('/assets/data/menu.json');
	}
}
