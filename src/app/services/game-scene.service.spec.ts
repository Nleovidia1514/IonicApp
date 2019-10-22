import { TestBed } from '@angular/core/testing';

import { GameSceneService } from './game-scene.service';

describe('GameSceneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSceneService = TestBed.get(GameSceneService);
    expect(service).toBeTruthy();
  });
});
