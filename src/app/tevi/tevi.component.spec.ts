import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeviComponent } from './tevi.component';

describe('TeviComponent', () => {
  let component: TeviComponent;
  let fixture: ComponentFixture<TeviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeviComponent]
    });
    fixture = TestBed.createComponent(TeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
