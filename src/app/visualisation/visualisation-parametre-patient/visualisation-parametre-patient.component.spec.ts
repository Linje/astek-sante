import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationParametrePatientComponent } from './visualisation-parametre-patient.component';

describe('VisualisationParametrePatientComponent', () => {
  let component: VisualisationParametrePatientComponent;
  let fixture: ComponentFixture<VisualisationParametrePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationParametrePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationParametrePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
