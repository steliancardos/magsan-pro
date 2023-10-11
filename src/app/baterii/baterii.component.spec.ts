import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BateriiComponent } from './baterii.component';

describe('BateriiComponent', () => {
  let component: BateriiComponent;
  let fixture: ComponentFixture<BateriiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BateriiComponent]
    });
    fixture = TestBed.createComponent(BateriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
