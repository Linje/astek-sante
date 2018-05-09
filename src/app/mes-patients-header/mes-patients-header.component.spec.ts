import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPatientsHeaderComponent } from './mes-patients-header.component';

describe('MesPatientsHeaderComponent', () => {
  let component: MesPatientsHeaderComponent;
  let fixture: ComponentFixture<MesPatientsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesPatientsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPatientsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
