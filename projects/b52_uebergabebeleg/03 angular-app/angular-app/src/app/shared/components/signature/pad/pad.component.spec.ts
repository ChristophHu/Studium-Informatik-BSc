import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadComponent } from './pad.component';

describe('PadComponent', () => {
  let component: PadComponent;
  let fixture: ComponentFixture<PadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
