import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiuveteBaieComponent } from './chiuvete-baie.component';

describe('ChiuveteBaieComponent', () => {
  let component: ChiuveteBaieComponent;
  let fixture: ComponentFixture<ChiuveteBaieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiuveteBaieComponent]
    });
    fixture = TestBed.createComponent(ChiuveteBaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
