


import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class PaymentsDto {
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  amount?: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  currency: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tx_ref: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
}

export class InitiatePayoutDto {
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  amount: string;
}
