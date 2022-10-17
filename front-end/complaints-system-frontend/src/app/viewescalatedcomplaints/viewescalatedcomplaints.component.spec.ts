import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewescalatedcomplaintsComponent } from './viewescalatedcomplaints.component';

describe('ViewescalatedcomplaintsComponent', () => {
  let component: ViewescalatedcomplaintsComponent;
  let fixture: ComponentFixture<ViewescalatedcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewescalatedcomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewescalatedcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
