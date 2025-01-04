import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { cartEntity } from '../entities/cart.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(cartEntity) private readonly cartRepository: Repository<cartEntity>,
  ) {}

  // Add item to cart tied to a specific user
  async addToCart(userId: string, addToCart: CreateCartDto): Promise<{ message: string }> {
    const { item, quantity, image, name, price, description } = addToCart;

    try {
      // Check if the item already exists in the user's cart
      const existingItem = await this.cartRepository.findOne({ where: { item, userId } });

      if (existingItem) {
        // If item exists, update quantity
        existingItem.quantity += quantity;
        await this.cartRepository.save(existingItem);
        return { message: 'Item quantity updated successfully' };
      }

      // If item doesn't exist, create a new item
      const newItem = this.cartRepository.create({ item, quantity, image, name, price, description, userId });
      await this.cartRepository.save(newItem);
      return { message: 'Item added to cart successfully' };
    } catch (error) {
      // Handling errors with specific HTTP status codes
      throw new HttpException('Could not add item to cart', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Get all cart items for a specific user
  async getCartItems(userId: string): Promise<cartEntity[]> {
    try {
      // Fetch all cart items for the logged-in user
      const cartItems = await this.cartRepository.find({ where: { userId } });
      if (!cartItems.length) {
        throw new HttpException('No items in cart', HttpStatus.NOT_FOUND);
      }
      return cartItems;
    } catch (error) {
      // Handling errors with specific HTTP status codes
      throw new HttpException('Could not fetch cart items', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Remove an item from the cart
  async deleteFromCart(userId: string, itemId: number): Promise<{ message: string }> {
    try {
      // Find the item by id and userId
      const item = await this.cartRepository.findOne({ where: { id: itemId, userId } });

      if (!item) {
        throw new HttpException('Item not found in the cart', HttpStatus.NOT_FOUND);
      }

      // Remove the item from the cart
      await this.cartRepository.remove(item);
      return { message: 'Item removed from the cart successfully' };
    } catch (error) {
      // Handling errors with specific HTTP status codes
      throw new HttpException('Could not remove item from cart', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
