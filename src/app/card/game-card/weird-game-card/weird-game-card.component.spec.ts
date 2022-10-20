import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeirdGameCardComponent } from './weird-game-card.component';

describe('WeirdGameCardComponent', () => {
  let component: WeirdGameCardComponent;
  let fixture: ComponentFixture<WeirdGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeirdGameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeirdGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
