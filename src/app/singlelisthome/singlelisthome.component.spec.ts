import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglelisthomeComponent } from './singlelisthome.component';

describe('SinglelisthomeComponent', () => {
  let component: SinglelisthomeComponent;
  let fixture: ComponentFixture<SinglelisthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglelisthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglelisthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
