import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateThisAppDialogComponent } from './rate-this-app-dialog.component';

describe('RateThisAppDialogComponent', () => {
  let component: RateThisAppDialogComponent;
  let fixture: ComponentFixture<RateThisAppDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateThisAppDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateThisAppDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
