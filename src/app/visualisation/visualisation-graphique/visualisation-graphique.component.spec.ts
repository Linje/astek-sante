import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationGraphiqueComponent } from './visualisation-graphique.component';

describe('VisualisationGraphiqueComponent', () => {
  let component: VisualisationGraphiqueComponent;
  let fixture: ComponentFixture<VisualisationGraphiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationGraphiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
