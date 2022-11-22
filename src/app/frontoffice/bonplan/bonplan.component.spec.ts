import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonplanComponent } from './bonplan.component';

describe('BonplanComponent', () => {
  let component: BonplanComponent;
  let fixture: ComponentFixture<BonplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
