import { Test, TestingModule } from '@nestjs/testing';
import { PersonClubService } from './person-club.service';

describe('PersonClubService', () => {
  let service: PersonClubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonClubService],
    }).compile();

    service = module.get<PersonClubService>(PersonClubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
