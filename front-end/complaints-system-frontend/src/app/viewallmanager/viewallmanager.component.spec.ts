import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallmanagerComponent } from './viewallmanager.component';

describe('ViewallmanagerComponent', () => {
  let component: ViewallmanagerComponent;
  let fixture: ComponentFixture<ViewallmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
