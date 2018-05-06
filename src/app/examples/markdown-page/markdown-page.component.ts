import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'x-markdown-page',
	templateUrl: './markdown-page.component.html',
	styleUrls: ['./markdown-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownPageComponent implements OnInit {
	code = `*This* string is using **markdown** !`;
	transcludedCode = `

	<x-markdown>
		Hello *World*!
	</x-markdown>
	`;
	constructor() { }

	ngOnInit() {
	}

}
