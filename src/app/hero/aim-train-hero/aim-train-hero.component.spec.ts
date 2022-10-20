import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimTrainHeroComponent } from './aim-train-hero.component';

describe('AimTrainHeroComponent', () => {
  let component: AimTrainHeroComponent;
  let fixture: ComponentFixture<AimTrainHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimTrainHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimTrainHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
