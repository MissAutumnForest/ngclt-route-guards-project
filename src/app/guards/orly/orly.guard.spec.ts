import { TestBed, async, inject } from '@angular/core/testing';

import { OrlyGuard } from './orly.guard';

describe('OrlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrlyGuard]
    });
  });

  it('should ...', inject([OrlyGuard], (guard: OrlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
