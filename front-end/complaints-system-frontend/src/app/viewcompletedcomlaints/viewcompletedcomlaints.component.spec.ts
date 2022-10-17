import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompletedcomlaintsComponent } from './viewcompletedcomlaints.component';

describe('ViewcompletedcomlaintsComponent', () => {
  let component: ViewcompletedcomlaintsComponent;
  let fixture: ComponentFixture<ViewcompletedcomlaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcompletedcomlaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcompletedcomlaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
