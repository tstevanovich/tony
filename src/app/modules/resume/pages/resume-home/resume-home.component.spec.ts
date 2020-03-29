import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHomeComponent } from './resume-home.component';

describe('ResumeHomeComponent', () => {
  let component: ResumeHomeComponent;
  let fixture: ComponentFixture<ResumeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
