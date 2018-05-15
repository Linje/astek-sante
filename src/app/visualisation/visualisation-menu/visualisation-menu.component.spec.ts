import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationHeaderComponent } from './visualisation-header.component';

describe('VisualisationHeaderComponent', () => {
  let component: VisualisationHeaderComponent;
  let fixture: ComponentFixture<VisualisationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
