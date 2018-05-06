import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'x-side-nav-example',
	templateUrl: './side-nav-example.component.html',
	styleUrls: ['./side-nav-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavExampleComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
