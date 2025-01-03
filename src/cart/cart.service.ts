import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { cartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(cartEntity) private readonly cartRepository: Repository<cartEntity>,
  ) {}

  // Add item to cart tied to a specific user
  async addToCart(userId: string, addToCart: CreateCartDto): Promise<{ message: string }> {
    const { item, quantity, image, name, price, description } = addToCart;

    console.log('Adding to cart:', { userId, item, quantity, image, name, price, description });

    try {
      const existingItem = await this.cartRepository.findOne({ where: { item, userId } });

      if (existingItem) {
        existingItem.quantity += quantity;
        await this.cartRepository.save(existingItem);
        return { message: 'Item quantity updated' };
      }

      const newItem = this.cartRepository.create({ item, quantity, image, name, price, description, userId });
      await this.cartRepository.save(newItem);
      return { message: 'Item added to cart' };
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw new Error('Could not add item to cart');
    }
  }

  // Get all cart items for a specific user
  async getCartItems(userId: string): Promise<cartEntity[]> {
    try {
      const cartItems = await this.cartRepository.find({ where: { userId } });
      return cartItems;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw new Error('Could not fetch cart items');
    }
  }

  
  async deleteFromCart(userId: string, itemId: number): Promise<{ message: string }> {
    try {
      const item = await this.cartRepository.findOne({ where: { id: itemId, userId } });

      if (!item) {
        throw new Error('Item not found in the cart');
      }

      await this.cartRepository.remove(item);
      return { message: 'Item removed from the cart' };
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw new Error('Could not remove item from cart');
    }
  }
}
