import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtHeroComponent } from './rt-hero.component';

describe('RtHeroComponent', () => {
  let component: RtHeroComponent;
  let fixture: ComponentFixture<RtHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
