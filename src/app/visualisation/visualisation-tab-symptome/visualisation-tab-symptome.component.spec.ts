import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationTabSymptomeComponent } from './visualisation-tab-symptome.component';

describe('VisualisationTabSymptomeComponent', () => {
  let component: VisualisationTabSymptomeComponent;
  let fixture: ComponentFixture<VisualisationTabSymptomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationTabSymptomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationTabSymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
