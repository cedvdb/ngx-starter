import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'x-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'z-2 mg-m'
	}
})
export class CardComponent {

}
