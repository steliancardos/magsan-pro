import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinetiComponent } from './robineti.component';

describe('RobinetiComponent', () => {
  let component: RobinetiComponent;
  let fixture: ComponentFixture<RobinetiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobinetiComponent]
    });
    fixture = TestBed.createComponent(RobinetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
