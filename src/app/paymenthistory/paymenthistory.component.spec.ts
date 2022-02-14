import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenthistoryComponent } from './paymenthistory.component';

describe('PaymenthistoryComponent', () => {
  let component: PaymenthistoryComponent;
  let fixture: ComponentFixture<PaymenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymenthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
