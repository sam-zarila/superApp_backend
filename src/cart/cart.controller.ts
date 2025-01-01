import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCartDto } from './dto/create-cart.dto';
import { cartEntity } from './entities/cart.entity';


@ApiTags('Cart Apis')
@Controller('cart')
export class CartController {

  constructor(
    private CartService:CartService
  ){}

  @Post()
  async addTocart(@Body() addTocart:CreateCartDto){
  
     try {
      const result = await this.CartService.addToCart(addTocart)
      return result;
      
     } catch (error) {

      throw new HttpException('could not add item to cart',HttpStatus.BAD_REQUEST);
      
     }

  }
  @Get()
  async getCartItems():Promise<cartEntity[]>{
    try {
      const cartItems = await this.CartService.getCartItems();
      return cartItems
      
    } catch (error) {

      throw new HttpException('coulld not fetch cart items', HttpStatus.BAD_REQUEST)
      
    }
  }
  @Delete(':id')
  async deleteFromCart(@Param('id') id:number){

    try {
      const  result = await this.CartService.deleteFromCart(id)
      return result
      
    }  catch (error) {
      if(error.status === HttpStatus.NOT_FOUND){

        throw new HttpException('Item not found in cart', HttpStatus.NOT_FOUND);

      }

      throw new HttpException('Could not delete item from cart', HttpStatus.BAD_REQUEST);
      
    }

  }

}
