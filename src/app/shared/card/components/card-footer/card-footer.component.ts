import { Component, OnInit, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

@Component({
	selector: 'x-card-footer',
	templateUrl: './card-footer.component.html',
	styleUrls: ['./card-footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'class.flexEnd': 'align === "right"',
		'class.flexStart': 'align === "left"'
	}
})
export class CardFooterComponent implements OnInit {

	@Input() align: 'left' | 'right' = 'right';
	constructor() { }

	ngOnInit() {
	}

}
