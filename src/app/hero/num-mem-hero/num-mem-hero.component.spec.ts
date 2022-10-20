import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumMemHeroComponent } from './num-mem-hero.component';

describe('NumMemHeroComponent', () => {
  let component: NumMemHeroComponent;
  let fixture: ComponentFixture<NumMemHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumMemHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumMemHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
