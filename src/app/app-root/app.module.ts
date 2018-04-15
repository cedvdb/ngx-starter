import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../features/app-routing/app-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { AppComponent } from './app.component';
import { IconPageModule } from '../features/icon-page/icon-page.module';

@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,
		HeaderModule,
		AppRoutingModule,
		// demo pages
		IconPageModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
