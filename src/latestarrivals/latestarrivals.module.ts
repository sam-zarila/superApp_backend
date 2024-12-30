import { Module } from '@nestjs/common';
import { LatestarrivalsService } from './latestarrivals.service';
import { LatestarrivalsController } from './latestarrivals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Latestarrival } from './entities/latestarrival.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Latestarrival])],
  controllers: [LatestarrivalsController],
  providers: [LatestarrivalsService],
})
export class LatestarrivalsModule {}
