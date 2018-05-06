import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'x-side-nav-page',
	templateUrl: './side-nav-page.component.html',
	styleUrls: ['./side-nav-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class SideNavPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
