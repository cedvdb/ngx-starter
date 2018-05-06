import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { SidenavService } from './services/side-nav.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [SideNavComponent, SideNavItemComponent],
	exports: [SideNavComponent, SideNavItemComponent],
	providers: [SidenavService]
})
export class SideNavModule { }
