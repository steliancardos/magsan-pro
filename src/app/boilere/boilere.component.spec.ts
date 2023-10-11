import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilereComponent } from './boilere.component';

describe('BoilereComponent', () => {
  let component: BoilereComponent;
  let fixture: ComponentFixture<BoilereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoilereComponent]
    });
    fixture = TestBed.createComponent(BoilereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
