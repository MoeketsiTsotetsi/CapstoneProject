import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrComponent } from './scr.component';

describe('ScrComponent', () => {
  let component: ScrComponent;
  let fixture: ComponentFixture<ScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
