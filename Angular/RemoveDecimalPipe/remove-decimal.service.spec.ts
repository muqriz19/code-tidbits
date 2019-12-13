import { TestBed } from '@angular/core/testing';

import { RemoveDecimalPipe } from './remove-decimal.pipe';

describe('RemoveDecimalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveDecimalPipe = TestBed.get(RemoveDecimalPipe);
    expect(service).toBeTruthy();
  });
});
