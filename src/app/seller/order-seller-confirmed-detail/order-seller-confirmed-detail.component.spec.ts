import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSellerConfirmedDetailComponent } from './order-seller-confirmed-detail.component';

describe('OrderSellerConfirmedDetailComponent', () => {
  let component: OrderSellerConfirmedDetailComponent;
  let fixture: ComponentFixture<OrderSellerConfirmedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSellerConfirmedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSellerConfirmedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
