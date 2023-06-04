import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMacbookComponent } from './product-macbook.component';

describe('ProductMacbookComponent', () => {
  let component: ProductMacbookComponent;
  let fixture: ComponentFixture<ProductMacbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMacbookComponent]
    });
    fixture = TestBed.createComponent(ProductMacbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
