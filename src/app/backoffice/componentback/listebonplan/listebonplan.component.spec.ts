import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebonplanComponent } from './listebonplan.component';

describe('ListebonplanComponent', () => {
  let component: ListebonplanComponent;
  let fixture: ComponentFixture<ListebonplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebonplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
