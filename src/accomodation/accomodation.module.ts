import { Module } from '@nestjs/common';
import { AccomodationController } from './controllers/accomodation/accomodation.controller';
import { AccomodationService } from './services/accomodation/accomodation.service';

@Module({
  controllers: [AccomodationController],
  providers: [AccomodationService]
})
export class AccomodationModule {}
