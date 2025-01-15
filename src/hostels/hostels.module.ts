import { Module } from '@nestjs/common';
import { HostelsService } from './services/hostels/hostels.service';
import { HostelsController } from './controllers/hostels/hostels.controller';

@Module({
  providers: [HostelsService],
  controllers: [HostelsController]
})
export class HostelsModule {}
