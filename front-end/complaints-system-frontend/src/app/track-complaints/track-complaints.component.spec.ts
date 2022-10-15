import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackComplaintsComponent } from './track-complaints.component';

describe('TrackComplaintsComponent', () => {
  let component: TrackComplaintsComponent;
  let fixture: ComponentFixture<TrackComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
