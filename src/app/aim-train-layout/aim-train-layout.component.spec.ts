import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimTrainLayoutComponent } from './aim-train-layout.component';

describe('AimTrainLayoutComponent', () => {
  let component: AimTrainLayoutComponent;
  let fixture: ComponentFixture<AimTrainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimTrainLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimTrainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
