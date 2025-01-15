import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCartDto } from './dto/create-cart.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from 'src/jwt/payload';


@ApiTags('Cart APIs')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

 @UseGuards(AuthGuard('jwt'))
  @Post()
  async addToCart(@Req() request: any, @Body() addToCartDto: CreateCartDto) {
      const user: JwtPayload = request.user;

      if (!user || !user.userId) {
          throw new BadRequestException('User not authenticated');
      }

      console.log('Authenticated User ID:', user.userId);
      return this.cartService.addToCart(user.userId, addToCartDto);
  }

 @UseGuards(AuthGuard('jwt'))
  @Get()
  async getCartItems(@Req() request: any) {
      const user: JwtPayload = request.user;

      if (!user || !user.userId) {
          throw new BadRequestException('User not authenticated');
      }

      console.log('Fetching cart items for User ID:', user.userId);
      return this.cartService.getCartItems(user.userId);
  }

//   @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteFromCart(@Req() request: any, @Param('id') id: number) {
      const user: JwtPayload = request.user;

      if (!user || !user.userId) {
          throw new BadRequestException('User not authenticated');
      }

      console.log(`Deleting item with ID ${id} for User ID: ${user.userId}`);
      return this.cartService.deleteFromCart(user.userId, id);
  }
}
