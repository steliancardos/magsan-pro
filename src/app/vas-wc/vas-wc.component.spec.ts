import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasWcComponent } from './vas-wc.component';

describe('VasWcComponent', () => {
  let component: VasWcComponent;
  let fixture: ComponentFixture<VasWcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VasWcComponent]
    });
    fixture = TestBed.createComponent(VasWcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
