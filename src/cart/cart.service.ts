import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from '../entities/cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity) private readonly cartRepository: Repository<CartEntity>,
  ) {}

  async addToCart(userId: string, addToCartDto: CreateCartDto): Promise<{ message: string }> {
    const { item, quantity, image, name, price, description } = addToCartDto;

    const existingItem = await this.cartRepository.findOne({ where: { item, userId } });

    if (existingItem) {
      existingItem.quantity += quantity;
      await this.cartRepository.save(existingItem);
      return { message: 'Item quantity updated successfully' };
    }

    const newItem = this.cartRepository.create({ userId, item, quantity, image, name, price, description });
    await this.cartRepository.save(newItem);
    return { message: 'Item added to cart successfully' };
  }

  async getCartItems(userId: string): Promise<CartEntity[]> {
    const cartItems = await this.cartRepository.find({ where: { userId } });
    if (!cartItems.length) {
      throw new HttpException('No items in cart', HttpStatus.NOT_FOUND);
    }
    return cartItems;
  }

  async deleteFromCart(userId: string, itemId: number): Promise<{ message: string }> {
    const item = await this.cartRepository.findOne({ where: { id: itemId, userId } });
    if (!item) {
      throw new HttpException('Item not found in cart', HttpStatus.NOT_FOUND);
    }
    await this.cartRepository.remove(item);
    return { message: 'Item removed from the cart successfully' };
  }
}
