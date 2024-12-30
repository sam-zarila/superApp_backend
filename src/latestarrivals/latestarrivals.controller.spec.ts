import { Test, TestingModule } from '@nestjs/testing';
import { LatestarrivalsController } from './latestarrivals.controller';
import { LatestarrivalsService } from './latestarrivals.service';

describe('LatestarrivalsController', () => {
  let controller: LatestarrivalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatestarrivalsController],
      providers: [LatestarrivalsService],
    }).compile();

    controller = module.get<LatestarrivalsController>(LatestarrivalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
