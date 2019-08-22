import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyMobileComponent } from './home-body-mobile.component';

describe('HomeBodyMobileComponent', () => {
  let component: HomeBodyMobileComponent;
  let fixture: ComponentFixture<HomeBodyMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBodyMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBodyMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
