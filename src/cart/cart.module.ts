import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from '../entities/cart.entity';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';


@Module({
  imports:[TypeOrmModule.forFeature([CartEntity])],
  controllers: [CartController,AppController],
  providers: [CartService,AppService],
  exports:[CartService,AppService]
})
export class CartModule {}

