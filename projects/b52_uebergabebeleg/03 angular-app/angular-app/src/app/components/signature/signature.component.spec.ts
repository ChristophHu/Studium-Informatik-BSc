import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureComponent } from './signature.component';

describe('SignatureComponent', () => {
  let component: SignatureComponent;
  let fixture: ComponentFixture<SignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
