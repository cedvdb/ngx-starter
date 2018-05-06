import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '../../shared/card';
import { CodeModule } from '../../shared/code/code.module';

@NgModule({
	imports: [
		CommonModule,
		CardModule,
		CodeModule,
		RouterModule.forChild([
			{
				path: 'card',
				component: CardPageComponent
			},
			{
				path: '',
				redirectTo: '/card',
				pathMatch: 'full'
			}
		])
	],
	declarations: [CardPageComponent]
})
export class CardPageModule { }
