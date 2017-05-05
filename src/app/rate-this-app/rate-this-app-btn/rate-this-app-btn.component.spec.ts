import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateThisAppBtnComponent } from './rate-this-app-btn.component';

describe('RateThisAppBtnComponent', () => {
  let component: RateThisAppBtnComponent;
  let fixture: ComponentFixture<RateThisAppBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateThisAppBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateThisAppBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
