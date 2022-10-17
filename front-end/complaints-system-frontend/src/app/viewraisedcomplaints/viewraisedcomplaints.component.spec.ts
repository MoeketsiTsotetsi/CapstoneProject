import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewraisedcomplaintsComponent } from './viewraisedcomplaints.component';

describe('ViewraisedcomplaintsComponent', () => {
  let component: ViewraisedcomplaintsComponent;
  let fixture: ComponentFixture<ViewraisedcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewraisedcomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewraisedcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
