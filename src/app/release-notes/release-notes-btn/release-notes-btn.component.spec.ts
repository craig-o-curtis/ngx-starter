import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseNotesBtnComponent } from './release-notes-btn.component';

describe('ReleaseNotesBtnComponent', () => {
  let component: ReleaseNotesBtnComponent;
  let fixture: ComponentFixture<ReleaseNotesBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseNotesBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseNotesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
