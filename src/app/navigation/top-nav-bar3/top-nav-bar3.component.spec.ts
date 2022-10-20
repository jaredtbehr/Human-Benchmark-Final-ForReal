import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBar3Component } from './top-nav-bar3.component';

describe('TopNavBar3Component', () => {
  let component: TopNavBar3Component;
  let fixture: ComponentFixture<TopNavBar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavBar3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavBar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
