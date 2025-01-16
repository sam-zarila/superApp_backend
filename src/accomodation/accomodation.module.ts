import { Module } from '@nestjs/common';
import { AccomodationController } from './controllers/accomodation/accomodation.controller';
import { AccomodationService } from './services/accomodation/accomodation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingRoom } from 'src/entities/Booking.Entity';

@Module({
  imports:[TypeOrmModule.forFeature([BookingRoom])],
  controllers: [AccomodationController],
  providers: [AccomodationService]
})
export class AccomodationModule {}
