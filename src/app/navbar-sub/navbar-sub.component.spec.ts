import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSubComponent } from './navbar-sub.component';

describe('NavbarSubComponent', () => {
  let component: NavbarSubComponent;
  let fixture: ComponentFixture<NavbarSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSubComponent]
    });
    fixture = TestBed.createComponent(NavbarSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
