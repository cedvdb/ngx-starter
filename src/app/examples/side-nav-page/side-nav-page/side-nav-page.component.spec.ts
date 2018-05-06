import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavPageComponent } from './side-nav-page.component';

describe('SideNavPageComponent', () => {
  let component: SideNavPageComponent;
  let fixture: ComponentFixture<SideNavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
