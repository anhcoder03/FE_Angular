import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductXiaomiOppoComponent } from './product-xiaomi-oppo.component';

describe('ProductXiaomiOppoComponent', () => {
  let component: ProductXiaomiOppoComponent;
  let fixture: ComponentFixture<ProductXiaomiOppoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductXiaomiOppoComponent]
    });
    fixture = TestBed.createComponent(ProductXiaomiOppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
