import { TestBed } from '@angular/core/testing';

import { CalculationsElectricService } from './calculations-electric.service';

describe('CalculationsElectricService', () => {
  let service: CalculationsElectricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationsElectricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
