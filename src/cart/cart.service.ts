import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { cartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {

  constructor (
   @InjectRepository(cartEntity) private readonly cartRepository:Repository<cartEntity>
  ){}

  async addToCart( addTocart:CreateCartDto) :Promise<{message:string}>{
    const{}

  }
}
