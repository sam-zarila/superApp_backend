import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
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
  async addToCart( addToCart: CreateCartDto): Promise<{ message: string }> {
    const { item, quantity, image, name, price, description } = addToCart;

    try {
      
      const existingItem = await this.cartRepository.findOne({ where: { item } });

      if (existingItem) {
        // If item exists, update quantity
        existingItem.quantity += quantity;
        await this.cartRepository.save(existingItem);
        return { message: 'Item quantity updated successfully' };
      }

    
      const newItem = this.cartRepository.create({ item, quantity, image, name, price, description,  });
      await this.cartRepository.save(newItem);
      return { message: 'Item added to cart successfully' };
    } catch (error) {
      
      throw new HttpException('Could not add item to cart', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Get all cart items for a specific user
  async getCartItems(): Promise<cartEntity[]> {
    try {
      // Fetch all cart items for the logged-in user
      const cartItems = await this.cartRepository.find();
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
  async deleteFromCart( itemId: number): Promise<{ message: string }> {
    try {
      // Find the item by id and userId
      const item = await this.cartRepository.findOne({ where: { id: itemId } });

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
