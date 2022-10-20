import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumMemLayoutComponent } from './num-mem-layout.component';

describe('NumMemLayoutComponent', () => {
  let component: NumMemLayoutComponent;
  let fixture: ComponentFixture<NumMemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumMemLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumMemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
