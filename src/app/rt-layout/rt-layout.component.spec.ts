import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtLayoutComponent } from './rt-layout.component';

describe('RtLayoutComponent', () => {
  let component: RtLayoutComponent;
  let fixture: ComponentFixture<RtLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
