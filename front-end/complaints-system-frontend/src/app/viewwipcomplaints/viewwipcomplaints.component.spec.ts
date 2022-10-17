import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwipcomplaintsComponent } from './viewwipcomplaints.component';

describe('ViewwipcomplaintsComponent', () => {
  let component: ViewwipcomplaintsComponent;
  let fixture: ComponentFixture<ViewwipcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewwipcomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewwipcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
