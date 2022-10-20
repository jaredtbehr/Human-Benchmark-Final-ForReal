import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqMemLayoutComponent } from './seq-mem-layout.component';

describe('SeqMemLayoutComponent', () => {
  let component: SeqMemLayoutComponent;
  let fixture: ComponentFixture<SeqMemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeqMemLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeqMemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
