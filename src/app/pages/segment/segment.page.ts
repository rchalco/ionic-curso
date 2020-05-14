import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from '@ionic/angular';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-segment',
	templateUrl: './segment.page.html',
	styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

	@ViewChild('segment1', {static: true}) segment: IonSegment;
	superHeroes: Observable<any[]>;
	publisherSelect: string = '';

	constructor(private dataService: DataService) {


	}

	ngOnInit() {
		this.segment.value = 'todos';
		this.superHeroes = this.dataService.getSuperHeroes();
	}

	segmentChanged(event) {
		if (event.detail.value === 'todos') {
			this.publisherSelect = '';
			return;
		}
		this.publisherSelect = event.detail.value;
	}

	e;
}
