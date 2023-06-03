import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAppleComponent } from './product-apple.component';

describe('ProductAppleComponent', () => {
  let component: ProductAppleComponent;
  let fixture: ComponentFixture<ProductAppleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAppleComponent]
    });
    fixture = TestBed.createComponent(ProductAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
