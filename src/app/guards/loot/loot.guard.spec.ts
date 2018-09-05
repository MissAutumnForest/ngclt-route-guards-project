import { TestBed, async, inject } from '@angular/core/testing';

import { LootGuard } from './loot.guard';

describe('LootGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LootGuard]
    });
  });

  it('should ...', inject([LootGuard], (guard: LootGuard) => {
    expect(guard).toBeTruthy();
  }));
});
