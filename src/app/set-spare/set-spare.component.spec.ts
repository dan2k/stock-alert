import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSpareComponent } from './set-spare.component';

describe('SetSpareComponent', () => {
  let component: SetSpareComponent;
  let fixture: ComponentFixture<SetSpareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSpareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSpareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
