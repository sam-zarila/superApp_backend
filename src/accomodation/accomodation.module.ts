import { Module } from '@nestjs/common';
import { AccomodationController } from './controllers/accomodation/accomodation.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingRoom } from 'src/entities/Booking.Entity';
import { AccomodationService } from './services/accomodation/accomodation.service';
import { BoardingHouse } from 'src/entities/Hostel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BookingRoom, BoardingHouse])],
  controllers: [AccomodationController],
  providers: [AccomodationService]
})
export class AccomodationModule {}
