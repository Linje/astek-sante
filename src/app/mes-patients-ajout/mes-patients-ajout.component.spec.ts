import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPatientsAjoutComponent } from './mes-patients-ajout.component';

describe('MesPatientsAjoutComponent', () => {
  let component: MesPatientsAjoutComponent;
  let fixture: ComponentFixture<MesPatientsAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesPatientsAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPatientsAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
