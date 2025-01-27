import { Module } from '@nestjs/common';
import { PaymentsController } from './controllers/payments/payments.controller';
import { PaymentsService } from './services/payments/payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paymentEntity } from 'src/entities/payment.entity';

import { HttpModule } from '@nestjs/axios';
import { BookingRoom } from 'src/entities/booking.entity';

@Module({
  imports:[TypeOrmModule.forFeature([paymentEntity,BookingRoom]),HttpModule ],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
