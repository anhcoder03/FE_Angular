import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPageComponent } from './product-detail-page.component';

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPageComponent]
    });
    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
