import { Module } from '@nestjs/common';
import { HostelsService } from './services/hostels/hostels.service';
import { HostelsController } from './controllers/hostels/hostels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardingHouse } from 'src/entities/Hostel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BoardingHouse])],
  providers: [HostelsService],
  controllers: [HostelsController]
})
export class HostelsModule {}
