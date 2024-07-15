import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CircularSpinnerComponent } from './circular-spinner.component';

describe('CircularSpinnerComponent', () => {
  let component: CircularSpinnerComponent;
  let fixture: ComponentFixture<CircularSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularSpinnerComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
