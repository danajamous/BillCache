import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaynewbillComponent } from './paynewbill.component';

describe('PaynewbillComponent', () => {
  let component: PaynewbillComponent;
  let fixture: ComponentFixture<PaynewbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaynewbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaynewbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
