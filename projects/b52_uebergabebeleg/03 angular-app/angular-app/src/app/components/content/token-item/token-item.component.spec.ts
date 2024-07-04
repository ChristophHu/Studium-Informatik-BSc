import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenItemComponent } from './token-item.component';

describe('TokenItemComponent', () => {
  let component: TokenItemComponent;
  let fixture: ComponentFixture<TokenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
