import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBillsComponent } from './saved-bills.component';

describe('SavedBillsComponent', () => {
  let component: SavedBillsComponent;
  let fixture: ComponentFixture<SavedBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
