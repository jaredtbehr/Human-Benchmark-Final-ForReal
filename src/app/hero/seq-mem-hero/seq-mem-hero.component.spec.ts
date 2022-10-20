import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqMemHeroComponent } from './seq-mem-hero.component';

describe('SeqMemHeroComponent', () => {
  let component: SeqMemHeroComponent;
  let fixture: ComponentFixture<SeqMemHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeqMemHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeqMemHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
