import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproposComponent } from './appropos.component';

describe('ApproposComponent', () => {
  let component: ApproposComponent;
  let fixture: ComponentFixture<ApproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
