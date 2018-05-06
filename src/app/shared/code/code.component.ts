import { Component, OnInit, ContentChild, AfterContentInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
	selector: 'x-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent implements AfterContentInit {

	constructor(protected el: ElementRef) { }

	ngAfterContentInit() {
		// debugger;
		// prettify.prettyPrintOne(this.el.nativeElement.innerHTML);
	}

}
