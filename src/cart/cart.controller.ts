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
import FirebaseAuthGuard from 'src/firebase/firebase-auth.guard';  // Firebase Auth Guard import

@ApiTags('Cart APIs') 
@ApiBearerAuth() 
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(FirebaseAuthGuard) // Firebase Authentication Guard
  @Post()
  async addToCart(@Req() request: any, @Body() addToCartDto: CreateCartDto) {
    const user = request.user; // Firebase `uid` extracted from the request

    // Check if the user is authenticated
    if (!user || !user.uid) {
      throw new BadRequestException('User not authenticated');
    }

    // Call service to add item to the cart using Firebase UID
    return this.cartService.addToCart(user.uid, addToCartDto);
  }

  @UseGuards(FirebaseAuthGuard) // Firebase Authentication Guard
  @Get()
  async getCartItems(@Req() request: any) {
    const user = request.user;

    // Check if the user is authenticated
    if (!user || !user.uid) {
      throw new BadRequestException('User not authenticated');
    }

    // Call service to get items in the cart using Firebase UID
    return this.cartService.getCartItems(user.uid);
  }

  @UseGuards(FirebaseAuthGuard) // Firebase Authentication Guard
  @Delete(':id')
  async deleteFromCart(@Req() request: any, @Param('id') id: number) {
    const user = request.user;

    // Check if the user is authenticated
    if (!user || !user.uid) {
      throw new BadRequestException('User not authenticated');
    }

    // Call service to delete item from cart using Firebase UID
    return this.cartService.deleteFromCart(user.uid, id);
  }
}
