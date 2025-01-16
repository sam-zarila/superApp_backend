import { Module } from '@nestjs/common';
import { HostelsService } from './services/hostels/hostels.service';
import { HostelsController } from './controllers/hostels/hostels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingRoom } from 'src/entities/Booking.Entity';

@Module({
  imports:[TypeOrmModule.forFeature([BookingRoom])],
  providers: [HostelsService],
  controllers: [HostelsController]
})
export class HostelsModule {}
