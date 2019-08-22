import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyDesktopComponent } from './home-body-desktop.component';

describe('HomeBodyDesktopComponent', () => {
  let component: HomeBodyDesktopComponent;
  let fixture: ComponentFixture<HomeBodyDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBodyDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBodyDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
