import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbonplanComponent } from './formbonplan.component';

describe('FormbonplanComponent', () => {
  let component: FormbonplanComponent;
  let fixture: ComponentFixture<FormbonplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbonplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
