import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cartEntity } from './entities/cart.entity';

@Module({
  imports:[TypeOrmModule.forFeature([cartEntity])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
