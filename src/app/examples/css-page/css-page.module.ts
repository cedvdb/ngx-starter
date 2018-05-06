import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssPageComponent } from './css-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'css',
				component: CssPageComponent
			},
			{
				path: '',
				redirectTo: '/css',
				pathMatch: 'full'
			}
		])
	],
	declarations: [CssPageComponent]
})
export class CssPageModule { }
