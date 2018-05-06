import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'x-css-page',
	templateUrl: './css-page.component.html',
	styleUrls: ['./css-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
