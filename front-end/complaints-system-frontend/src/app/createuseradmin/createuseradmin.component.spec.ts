import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuseradminComponent } from './createuseradmin.component';

describe('CreateuseradminComponent', () => {
  let component: CreateuseradminComponent;
  let fixture: ComponentFixture<CreateuseradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuseradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuseradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
