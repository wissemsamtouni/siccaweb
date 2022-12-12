import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoieComponent } from './categoie.component';

describe('CategoieComponent', () => {
  let component: CategoieComponent;
  let fixture: ComponentFixture<CategoieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
