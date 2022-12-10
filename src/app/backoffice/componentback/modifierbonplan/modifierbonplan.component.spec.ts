import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbonplanComponent } from './modifierbonplan.component';

describe('ModifierbonplanComponent', () => {
  let component: ModifierbonplanComponent;
  let fixture: ComponentFixture<ModifierbonplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierbonplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
