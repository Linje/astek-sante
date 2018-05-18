import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationNouveauSymptomeComponent } from './visualisation-nouveau-symptome.component';

describe('VisualisationNouveauSymptomeComponent', () => {
  let component: VisualisationNouveauSymptomeComponent;
  let fixture: ComponentFixture<VisualisationNouveauSymptomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationNouveauSymptomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationNouveauSymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
