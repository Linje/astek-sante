import { TestBed, inject } from '@angular/core/testing';

import { ProfessionnelSanteService } from './professionnel-sante.service';

describe('ProfessionnelSanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessionnelSanteService]
    });
  });

  it('should be created', inject([ProfessionnelSanteService], (service: ProfessionnelSanteService) => {
    expect(service).toBeTruthy();
  }));
});
