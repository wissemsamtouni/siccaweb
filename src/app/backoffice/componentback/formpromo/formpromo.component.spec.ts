import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpromoComponent } from './formpromo.component';

describe('FormpromoComponent', () => {
  let component: FormpromoComponent;
  let fixture: ComponentFixture<FormpromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
