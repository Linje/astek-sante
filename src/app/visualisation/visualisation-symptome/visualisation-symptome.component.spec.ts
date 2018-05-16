import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationSymptomeComponent } from './visualisation-symptome.component';

describe('VisualisationSymptomeComponent', () => {
  let component: VisualisationSymptomeComponent;
  let fixture: ComponentFixture<VisualisationSymptomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationSymptomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationSymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
