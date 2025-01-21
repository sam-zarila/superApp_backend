import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InitiatePayoutDto, PaymentsDto } from 'src/payments/dto/paymentDto';
import { PaymentsService } from 'src/payments/services/payments/payments.service';


@ApiTags("payment Gateway")
@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

  @Post('pay')
  async processPayment(
    
    @Body() paymentsDto: PaymentsDto 
  ) {
    return this.paymentsService.processPayment(paymentsDto);
  }

  @Get('status/:tx_ref')
  async getPaymentStatus(@Param('tx_ref') tx_ref: string) {
    return this.paymentsService.getPaymentStatus(tx_ref);
  }

  @Get('verify/:tx_ref')
  
  async verifyPayment(@Param('tx_ref') tx_ref: string) {
    
    console.log("verifying",tx_ref)
    return this.paymentsService.verifyPayment(tx_ref);
  }

  @Post('cash-out')
  async initiatePayout(
    @Body() body: InitiatePayoutDto, 
  ) {
    const { phoneNumber, amount } = body;
    return await this.paymentsService.initiatePayout(phoneNumber, amount);
  }
}
