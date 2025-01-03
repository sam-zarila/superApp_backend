import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cartEntity } from './entities/cart.entity';
import { FirebaseService } from 'src/firebase/services/firebase/firebase.service';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports:[TypeOrmModule.forFeature([cartEntity]),FirebaseModule],
  controllers: [CartController],
  providers: [CartService,FirebaseService],
})
export class CartModule {}
