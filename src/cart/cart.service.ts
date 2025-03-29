import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from '../entities/cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';
import { User } from '../entities/user.auth_entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
  ) {}

  // Add item to cart
  async addToCart(uid: number, addToCartDto: CreateCartDto): Promise<{ message: string }> {
    const { item, quantity, image, name, price, description } = addToCartDto;

    // Check if the item already exists in the user's cart using the relation
    const existingItem = await this.cartRepository.findOne({
      where: { item, user: { id: uid } },
      relations: ['user'],
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      await this.cartRepository.save(existingItem);
      return { message: 'Item quantity updated successfully' };
    }

    // Create a new cart item and tie it to the user via the relation
    const newItem = this.cartRepository.create({
      item,
      quantity,
      image,
      name,
      price,
      description,
      user: { id: uid } as User, // Assign the user relation using the user's id
    });
    await this.cartRepository.save(newItem);
    return { message: 'Item added to cart successfully' };
  }

  // Get all items in the cart for a specific user
  async getCartItems(uid: number): Promise<CartEntity[]> {
    const cartItems = await this.cartRepository.find({
      where: { user: { id: uid } },
      relations: ['user'],
    });
    if (!cartItems.length) {
      throw new HttpException('No items in cart', HttpStatus.NOT_FOUND);
    }
    return cartItems;
  }

  // Delete an item from the cart for a specific user
  async deleteFromCart(uid: number, itemId: number): Promise<{ message: string }> {
    const item = await this.cartRepository.findOne({
      where: { id: itemId, user: { id: uid } },
      relations: ['user'],
    });
    if (!item) {
      throw new HttpException('Item not found in cart', HttpStatus.NOT_FOUND);
    }
    await this.cartRepository.remove(item);
    return { message: 'Item removed from the cart successfully' };
  }
}
