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
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CreateCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard } from 'src/jwt/jwtAuthguard';

@ApiTags('Cart APIs')
@ApiBearerAuth()
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addToCart(@Req() request: any, @Body() addToCartDto: CreateCartDto) {
    const user = request.user; // Extracted from the JWT payload

    // Check if the user is authenticated by verifying the existence of userId
    if (!user || !user.userId) {
      throw new BadRequestException('User not authenticated');
    }

    // Use the authenticated user's userId to add the item to their cart
    return this.cartService.addToCart(user.userId, addToCartDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCartItems(@Req() request: any) {
    const user = request.user;

    if (!user || !user.userId) {
      throw new BadRequestException('User not authenticated');
    }

    return this.cartService.getCartItems(user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteFromCart(@Req() request: any, @Param('id') id: number) {
    const user = request.user;

    if (!user || !user.userId) {
      throw new BadRequestException('User not authenticated');
    }

    return this.cartService.deleteFromCart(user.userId, id);
  }
}
