import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'x-card-page',
	templateUrl: './card-page.component.html',
	styleUrls: ['./card-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPageComponent implements OnInit {
	code = `
	<x-card-header>
	This is the header of the card
	</x-card-header>

	This is the content of the card

	<x-card-footer>
	This is the footer of the card
	</x-card-footer>
	`;

	constructor() { }

	ngOnInit() {
	}

}
