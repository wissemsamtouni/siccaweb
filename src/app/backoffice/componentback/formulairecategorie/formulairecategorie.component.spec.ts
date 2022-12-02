import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairecategorieComponent } from './formulairecategorie.component';

describe('FormulairecategorieComponent', () => {
  let component: FormulairecategorieComponent;
  let fixture: ComponentFixture<FormulairecategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairecategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
