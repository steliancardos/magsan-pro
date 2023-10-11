import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitinguriComponent } from './fitinguri.component';

describe('FitinguriComponent', () => {
  let component: FitinguriComponent;
  let fixture: ComponentFixture<FitinguriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitinguriComponent]
    });
    fixture = TestBed.createComponent(FitinguriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
