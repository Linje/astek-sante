import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { ProfessionnelSanteService } from './professionnel-sante.service';

describe('ProfessionnelSanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [ProfessionnelSanteService]
    });
  });

  it('should be created', inject([ProfessionnelSanteService], (service: ProfessionnelSanteService) => {
    expect(service).toBeTruthy();
  }));
});
