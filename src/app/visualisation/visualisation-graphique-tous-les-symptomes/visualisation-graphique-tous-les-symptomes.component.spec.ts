import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationGraphiqueTousLesSymptomesComponent } from './visualisation-graphique-tous-les-symptomes.component';

describe('VisualisationGraphiqueTousLesSymptomesComponent', () => {
  let component: VisualisationGraphiqueTousLesSymptomesComponent;
  let fixture: ComponentFixture<VisualisationGraphiqueTousLesSymptomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationGraphiqueTousLesSymptomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationGraphiqueTousLesSymptomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
