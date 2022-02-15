import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedpaymentmethodsComponent } from './savedpaymentmethods.component';

describe('SavedpaymentmethodsComponent', () => {
  let component: SavedpaymentmethodsComponent;
  let fixture: ComponentFixture<SavedpaymentmethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedpaymentmethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedpaymentmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
