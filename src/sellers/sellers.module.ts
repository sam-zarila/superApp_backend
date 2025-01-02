import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { SellersApplicationForm } from 'src/entities/sellersApplication.Entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellersApplicationForm])], // Import the entity here
  providers: [SellersService],
  controllers: [SellersController],
  exports: [SellersService], // Export if needed in other modules
})
export class SellersModule {}
