import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPageComponent } from './icon-page.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../shared/icons';
import { CardModule } from '../../shared/card';

@NgModule({
	imports: [
		CommonModule,
		IconsModule,
		CardModule,
		RouterModule.forChild([
			{
				path: 'icons',
				component: IconPageComponent
			},
			{
				path: '',
				redirectTo: '/icons',
				pathMatch: 'full'
			}
		])
	],
	declarations: [IconPageComponent]
})
export class IconPageModule { }
