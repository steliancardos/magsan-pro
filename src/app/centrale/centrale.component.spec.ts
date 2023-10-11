import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraleComponent } from './centrale.component';

describe('CentraleComponent', () => {
  let component: CentraleComponent;
  let fixture: ComponentFixture<CentraleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentraleComponent]
    });
    fixture = TestBed.createComponent(CentraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
