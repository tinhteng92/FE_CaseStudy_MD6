import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRateProductComponent } from './list-rate-product.component';

describe('ListRateProductComponent', () => {
  let component: ListRateProductComponent;
  let fixture: ComponentFixture<ListRateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
