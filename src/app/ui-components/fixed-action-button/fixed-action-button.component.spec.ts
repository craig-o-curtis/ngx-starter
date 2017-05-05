import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedActionButtonComponent } from './fixed-action-button.component';

describe('FixedActionButtonComponent', () => {
  let component: FixedActionButtonComponent;
  let fixture: ComponentFixture<FixedActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
