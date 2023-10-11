import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiuveteComponent } from './chiuvete.component';

describe('ChiuveteComponent', () => {
  let component: ChiuveteComponent;
  let fixture: ComponentFixture<ChiuveteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiuveteComponent]
    });
    fixture = TestBed.createComponent(ChiuveteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
