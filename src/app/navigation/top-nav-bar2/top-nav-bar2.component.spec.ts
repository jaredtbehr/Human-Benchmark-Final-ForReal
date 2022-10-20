import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBar2Component } from './top-nav-bar2.component';

describe('TopNavBar2Component', () => {
  let component: TopNavBar2Component;
  let fixture: ComponentFixture<TopNavBar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavBar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
