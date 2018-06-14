import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationParametreSymptomeComponent } from './visualisation-parametre-symptome.component';

describe('VisualisationParametreSymptomeComponent', () => {
  let component: VisualisationParametreSymptomeComponent;
  let fixture: ComponentFixture<VisualisationParametreSymptomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationParametreSymptomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationParametreSymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
