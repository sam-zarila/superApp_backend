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
    const{item, quantity, image, name, price, description} = addTocart;

    console.log( 'adding to cart:',{ item, quantity, image, name, price, description})

    try {
      const existingItem = await this.cartRepository.findOne({where:{item}});

      if(existingItem){
        existingItem.quantity += quantity;
        await this.cartRepository.save(existingItem)
        return {message :"Item quantity updated"};
      }

      const newItem = this.cartRepository.create({item, quantity, image, name, price,description});
      await this.cartRepository.save(newItem);
      return {message:'item added to cart'};
      
    } catch (error) {
      console.error('Error adding item to cart:', error)
      
    }

  }

  async getCartItems(): Promise<cartEntity[]>{

    try {
      const cartItems = await this.cartRepository.find();
      return cartItems;
      
    } catch (error) {
      console.error('error fetching cart items',error);
      throw new Error('could not fetch cart items');
      
    }

  }

  async deleteFromCart(itemId:number): Promise<{message:string}>{

    try {

      const item = await this.cartRepository.findOne({where : {id:itemId}})

      if (!item) {

        throw new Error('item not found')
        
      }

      await this.cartRepository.remove(item)
      return {message : 'item removed form the cart'}
      
    } catch (error) {
      
    }

  }
  
}
