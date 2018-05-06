import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../../shared/card/card.module';
import { MarkdownModule } from '../../shared/markdown/markdown.module';
import { MarkdownPageComponent } from './markdown-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		CardModule,
		MarkdownModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: 'markdown',
				component: MarkdownPageComponent
			},
			{
				path: '',
				redirectTo: '/markdown',
				pathMatch: 'full'
			}
		])
	],
	declarations: [MarkdownPageComponent]
})
export class MarkdownPageModule { }
