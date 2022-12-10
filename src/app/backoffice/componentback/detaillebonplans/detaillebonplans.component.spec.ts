import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillebonplansComponent } from './detaillebonplans.component';

describe('DetaillebonplansComponent', () => {
  let component: DetaillebonplansComponent;
  let fixture: ComponentFixture<DetaillebonplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillebonplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillebonplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
