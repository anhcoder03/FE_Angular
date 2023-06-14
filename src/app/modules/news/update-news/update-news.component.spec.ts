import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsComponent } from './update-news.component';

describe('UpdateNewsComponent', () => {
  let component: UpdateNewsComponent;
  let fixture: ComponentFixture<UpdateNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNewsComponent]
    });
    fixture = TestBed.createComponent(UpdateNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
