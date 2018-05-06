import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Injectable } from '@angular/core';

@Injectable()
export class SidenavService {
	private _isOpen$ = new ReplaySubject<boolean>();
	isOpen$ = this._isOpen$.asObservable();
	private lastValue;

	constructor() {
	}

	toggle() {
		this.lastValue = !this.lastValue;
		this._isOpen$.next(this.lastValue);
	}

	open() {
		this._isOpen$.next(true);
		this.lastValue = true;
	}

	close() {
		this._isOpen$.next(false);
		this.lastValue = false;
	}

}
