import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete, 
  HttpException, 
  HttpStatus, 
  Req, 
  UseGuards 
} from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCartDto } from './dto/create-cart.dto';
import { cartEntity } from '../entities/cart.entity';
// import { FirebaseAuthGuard } from 'src/firebase/firebase.authGuard';

@ApiTags('Cart APIs')
@Controller('cart')
// @UseGuards(FirebaseAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Add item to the user's cart
  @Post()
  async addToCart(@Req() request: any, @Body() addToCartDto: CreateCartDto) {
    // const userId = request.user.uid; 
    try {
      const result = await this.cartService.addToCart( addToCartDto);
      return result;
    } catch (error) {
      throw new HttpException(
        'Could not add item to cart',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  
  @Get()
  async getCartItems(@Req() request: any): Promise<cartEntity[]> {
    // const userId = request.user.uid; 
    try {
      const cartItems = await this.cartService.getCartItems();
      return cartItems;
    } catch (error) {
      throw new HttpException(
        'Could not fetch cart items',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  
  @Delete(':id')
  async deleteFromCart(@Req() request: any, @Param('id') id: number) {
    // const userId = request.user.uid; 
    try {
      const result = await this.cartService.deleteFromCart( id);
      return result;
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new HttpException('Item not found in cart', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Could not delete item from cart',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
