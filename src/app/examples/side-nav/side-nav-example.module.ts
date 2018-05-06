import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavModule } from '../../shared/side-nav/side-nav.module';
import { SideNavExampleComponent } from './side-nav-example.component';

@NgModule({
	imports: [
		CommonModule,
		SideNavModule,
		RouterModule.forChild([])
	],
	declarations: [SideNavExampleComponent],
	exports: [SideNavExampleComponent]
})
export class SideNavExampleModule { }
