import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPageComponent } from './css-page.component';

describe('CssPageComponent', () => {
  let component: CssPageComponent;
  let fixture: ComponentFixture<CssPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
