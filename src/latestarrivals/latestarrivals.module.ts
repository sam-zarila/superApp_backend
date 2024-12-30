import { Module } from '@nestjs/common';
import { LatestarrivalsService } from './latestarrivals.service';
import { LatestarrivalsController } from './latestarrivals.controller';

@Module({
  controllers: [LatestarrivalsController],
  providers: [LatestarrivalsService],
})
export class LatestarrivalsModule {}
