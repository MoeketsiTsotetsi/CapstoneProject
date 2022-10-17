import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassignedcomplaintsComponent } from './viewassignedcomplaints.component';

describe('ViewassignedcomplaintsComponent', () => {
  let component: ViewassignedcomplaintsComponent;
  let fixture: ComponentFixture<ViewassignedcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewassignedcomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewassignedcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
