import { TestBed } from '@angular/core/testing';

import { RecipeCrud } from './recipe-crud';

describe('RecipeCrud', () => {
  let service: RecipeCrud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeCrud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
