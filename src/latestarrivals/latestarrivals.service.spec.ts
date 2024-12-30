import { Test, TestingModule } from '@nestjs/testing';
import { LatestarrivalsService } from './latestarrivals.service';

describe('LatestarrivalsService', () => {
  let service: LatestarrivalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LatestarrivalsService],
    }).compile();

    service = module.get<LatestarrivalsService>(LatestarrivalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
