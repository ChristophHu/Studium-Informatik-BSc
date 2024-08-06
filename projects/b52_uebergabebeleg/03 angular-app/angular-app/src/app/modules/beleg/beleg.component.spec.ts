import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelegComponent } from './beleg.component';

describe('BelegComponent', () => {
  let component: BelegComponent;
  let fixture: ComponentFixture<BelegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BelegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
