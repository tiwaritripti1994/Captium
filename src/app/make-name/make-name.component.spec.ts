import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNameComponent } from './make-name.component';

describe('MakeNameComponent', () => {
  let component: MakeNameComponent;
  let fixture: ComponentFixture<MakeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
