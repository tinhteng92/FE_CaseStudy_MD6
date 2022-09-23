import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSellerConfirmedComponent } from './order-seller-confirmed.component';

describe('OrderSellerConfirmedComponent', () => {
  let component: OrderSellerConfirmedComponent;
  let fixture: ComponentFixture<OrderSellerConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSellerConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSellerConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
