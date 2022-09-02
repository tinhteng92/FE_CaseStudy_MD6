import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlistProductComponent } from './showlist-product.component';

describe('ShowlistProductComponent', () => {
  let component: ShowlistProductComponent;
  let fixture: ComponentFixture<ShowlistProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowlistProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowlistProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
