import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'x-side-nav-item',
	templateUrl: './side-nav-item.component.html',
	styleUrls: ['./side-nav-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavItemComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
