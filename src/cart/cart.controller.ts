import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete, 
  Req, 
  UseGuards 
} from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCartDto } from './dto/create-cart.dto';


@ApiTags('Cart APIs')
@Controller('cart')

export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Add item to the user's cart
  @Post()
  async addToCart(@Req() request: any, @Body() addToCartDto: CreateCartDto) {
    const userId = request.user.userId; // Extract `userId` from validated JWT payload
    return this.cartService.addToCart(userId, addToCartDto);
  }

  // Get all cart items for the authenticated user
  @Get()
  async getCartItems(@Req() request: any) {
    const userId = request.user.userId;
    return this.cartService.getCartItems(userId);
  }

  // Remove an item from the cart
  @Delete(':id')
  async deleteFromCart(@Req() request: any, @Param('id') id: number) {
    const userId = request.user.userId;
    return this.cartService.deleteFromCart(userId, id);
  }
}
