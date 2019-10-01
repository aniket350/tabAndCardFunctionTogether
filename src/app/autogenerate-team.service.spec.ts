import { TestBed } from '@angular/core/testing';

import { AutogenerateTeamService } from './autogenerate-team.service';

describe('AutogenerateTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutogenerateTeamService = TestBed.get(AutogenerateTeamService);
    expect(service).toBeTruthy();
  });
});
