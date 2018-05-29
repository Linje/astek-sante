import { TestBed, inject } from '@angular/core/testing';

import { ConnexionService } from './connexion.service';
import { HttpModule } from '@angular/http';
import { ProfessionnelSanteService } from './professionnel-sante.service';

describe('ConnexionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [ConnexionService, ProfessionnelSanteService]
    });
  });

  it('should be created', inject([ConnexionService], (service: ConnexionService) => {
    expect(service).toBeTruthy();
  }));

  it('should return false (connexion)', inject([ConnexionService], (service: ConnexionService) => {
    service.connect("false_id","false_psw").then(res => {
      expect(res).toBeFalsy();
    }) 
  }));
});
