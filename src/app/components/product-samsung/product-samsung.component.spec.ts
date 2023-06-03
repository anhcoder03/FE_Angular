import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSamsungComponent } from './product-samsung.component';

describe('ProductSamsungComponent', () => {
  let component: ProductSamsungComponent;
  let fixture: ComponentFixture<ProductSamsungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSamsungComponent]
    });
    fixture = TestBed.createComponent(ProductSamsungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
