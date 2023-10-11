import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorifereComponent } from './calorifere.component';

describe('CalorifereComponent', () => {
  let component: CalorifereComponent;
  let fixture: ComponentFixture<CalorifereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalorifereComponent]
    });
    fixture = TestBed.createComponent(CalorifereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
