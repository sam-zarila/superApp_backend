import { Module } from '@nestjs/common';
import { PaymentsController } from './controllers/payments/payments.controller';
import { PaymentsService } from './services/payments/payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paymentEntity } from 'src/entities/payment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([paymentEntity])],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
