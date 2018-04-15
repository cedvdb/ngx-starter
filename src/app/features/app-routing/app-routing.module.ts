import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes.const';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	declarations: [],
	exports: [RouterModule]
})
export class AppRoutingModule { }
