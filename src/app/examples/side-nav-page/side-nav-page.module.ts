import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavPageComponent } from './side-nav-page/side-nav-page.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '../../shared/card';


@NgModule({
	imports: [
		CommonModule,
		CardModule,
		RouterModule.forChild([
			{
				path: 'sidenav',
				component: SideNavPageComponent
			},
			{
				path: '',
				redirectTo: '/sidenav',
				pathMatch: 'full'
			}
		])
	],
	declarations: [SideNavPageComponent]
})
export class SideNavPageModule { }
