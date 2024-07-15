import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugModeComponent } from './debug-mode.component';

describe('DebugModeComponent', () => {
  let component: DebugModeComponent;
  let fixture: ComponentFixture<DebugModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
