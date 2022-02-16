import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSummaryComponent } from './bill-summary.component';

describe('BillSummaryComponent', () => {
  let component: BillSummaryComponent;
  let fixture: ComponentFixture<BillSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
