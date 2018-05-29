import { TestBed, inject } from '@angular/core/testing';

import { PageService } from './page.service';

describe('PageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageService]
    });
  });

  it('should be created', inject([PageService], (service: PageService) => {
    expect(service).toBeTruthy();
  }));

  it('should set the page to 1', inject([PageService], (service: PageService) => {
    service.setPage(1);
    expect(service.getPage()).toBe(1);
  }));
  
});
