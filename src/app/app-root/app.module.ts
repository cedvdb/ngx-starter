import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../features/app-routing/app-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { AppComponent } from './app.component';
import { IconPageModule } from '../examples/icon-page/icon-page.module';
import { IconsModule } from '../shared/icons';
import { CardPageModule } from '../examples/card-page/card-page.module';
import { SideNavExampleModule } from '../examples/side-nav/side-nav-example.module';
import { MarkdownPageModule } from '../examples/markdown-page/markdown-page.module';

@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,
		HeaderModule,
		AppRoutingModule,
		// icons module to add symboles at the root
		IconsModule,
		// demo pages / components
		IconPageModule,
		CardPageModule,
		SideNavExampleModule,
		MarkdownPageModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
