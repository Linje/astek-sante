import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPatientsListeComponent } from './mes-patients-liste.component';

describe('MesPatientsListeComponent', () => {
  let component: MesPatientsListeComponent;
  let fixture: ComponentFixture<MesPatientsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesPatientsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPatientsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
