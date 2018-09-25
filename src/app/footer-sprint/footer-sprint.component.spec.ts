import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSprintComponent } from './footer-sprint.component';

describe('FooterSprintComponent', () => {
  let component: FooterSprintComponent;
  let fixture: ComponentFixture<FooterSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
