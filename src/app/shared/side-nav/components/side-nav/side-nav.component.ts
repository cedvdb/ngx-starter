import { Component, OnInit, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { AutoUnsub } from '../../../../utils/auto-unsub.class';
import { SidenavService } from '../../services/side-nav.service';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'x-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent extends AutoUnsub implements OnInit {

	@HostBinding('class.open') open;
	@HostBinding('class.z-2') elevation = true;
	@HostBinding('attr.role') role = 'navigation';

	constructor(public srv: SidenavService) { super(); }

	ngOnInit() {
		this.srv.isOpen$.pipe(
			takeUntil(this._destroy$)
		).subscribe((b: boolean) => this.open = b);
		this.onResize();
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		if (window.innerWidth < 900)
			this.srv.close();
		else
			this.srv.open();
	}

	checkSidenav(b: boolean) {
		this.open = b;
	}

}
