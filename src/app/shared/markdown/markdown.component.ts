import { Component, OnInit, AfterContentChecked, ElementRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { markdown } from 'markdown';

@Component({
	selector: 'x-markdown',
	templateUrl: './markdown.component.html',
	styleUrls: ['./markdown.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownComponent implements AfterContentChecked {
	@Input() string;

	constructor(protected el: ElementRef) { }

	ngAfterContentChecked() {
		let parsed: string;
		if (this.string) {
			parsed = markdown.toHTML(this.string);
		} else {
			const inner: string = this.el.nativeElement.innerHTML;
			parsed = markdown.toHTML(inner);
		}

		this.el.nativeElement.innerHTML = parsed;
	}

}
