import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';

// helper class to automatically unsubscribe from observable.
// just extend the class and when subscribing use: takeUntil(this_destroy$)

export abstract class AutoUnsub implements OnDestroy {

	private _destroy = new Subject<void>();
	protected _destroy$ = this._destroy.asObservable();

	constructor() { }

	ngOnDestroy() {
		this._destroy.next();
		this._destroy.complete();
	}
}
