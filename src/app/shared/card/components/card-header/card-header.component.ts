import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'x-card-header',
	templateUrl: './card-header.component.html',
	styleUrls: ['./card-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
