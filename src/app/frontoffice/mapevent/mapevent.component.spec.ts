import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapeventComponent } from './mapevent.component';

describe('MapeventComponent', () => {
  let component: MapeventComponent;
  let fixture: ComponentFixture<MapeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
