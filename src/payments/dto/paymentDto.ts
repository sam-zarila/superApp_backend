import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class PaymentsDto {
  @ApiProperty({
    description: 'The payment amount',
    example: '5000',
  })
  @IsNotEmpty()
  @IsString()
  amount?: string;

  @ApiProperty({
    description: 'The currency of the payment',
    example: 'MWK',
  })
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty({
    description: 'The email of the payer',
    example: 'user@example.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'The transaction reference ID',
    example: 'tx12345',
  })
  @IsNotEmpty()
  @IsString()
  tx_ref: string;

  @ApiProperty({
    description: 'The phone number of the payer (optional)',
    example: '+265987654321',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiProperty({
    description: 'The name of the payer (optional)',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}

export class InitiatePayoutDto {
  @ApiProperty({
    description: 'The phone number to receive the payout',
    example: '+265987654321',
  })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({
    description: 'The amount to be paid out',
    example: '1000',
  })
  @IsString()
  @IsNotEmpty()
  amount: string;
}
