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

  // Add item to cart
  async addToCart(uid: string, addToCartDto: CreateCartDto): Promise<{ message: string }> {
    const { item, quantity, image, name, price, description } = addToCartDto;

    // Check if item already exists in the cart
    const existingItem = await this.cartRepository.findOne({ where: { item, userId: uid } });

    if (existingItem) {
      existingItem.quantity += quantity;
      await this.cartRepository.save(existingItem);
      return { message: 'Item quantity updated successfully' };
    }

    // Create a new item if not already in the cart
    const newItem = this.cartRepository.create({ userId: uid, item, quantity, image, name, price, description });
    await this.cartRepository.save(newItem);
    return { message: 'Item added to cart successfully' };
  }

  // Get all items in the cart
  async getCartItems(uid: string): Promise<CartEntity[]> {
    const cartItems = await this.cartRepository.find({ where: { userId: uid } });
    if (!cartItems.length) {
      throw new HttpException('No items in cart', HttpStatus.NOT_FOUND);
    }
    return cartItems;
  }

  // Delete item from cart
  async deleteFromCart(uid: string, itemId: number): Promise<{ message: string }> {
    const item = await this.cartRepository.findOne({ where: { id: itemId, userId: uid } });
    if (!item) {
      throw new HttpException('Item not found in cart', HttpStatus.NOT_FOUND);
    }
    await this.cartRepository.remove(item);
    return { message: 'Item removed from the cart successfully' };
  }
}
