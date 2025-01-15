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
  import { AuthGuard } from '@nestjs/passport';
  import { JwtPayload } from 'src/jwt/payload';
  
  @ApiTags('Cart APIs') // Grouping for Swagger
  @ApiBearerAuth() // Indicates Bearer token authentication is required
  @Controller('cart')
  export class CartController {
    constructor(private readonly cartService: CartService) {}
  
   
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async addToCart(@Req() request: any, @Body() addToCartDto: CreateCartDto) {
      const user: JwtPayload = request.user;
  
      // Debugging logs for request details
      console.log('Authorization Header:', request.headers.authorization);
      console.log('Authenticated User:', user);
  
      // Ensure user is authenticated
      if (!user || !user.userId) {
        throw new BadRequestException('User not authenticated');
      }
  
      // Proceed to add item to cart
      console.log('Adding to cart for User ID:', user.userId);
      return this.cartService.addToCart(user.userId, addToCartDto);
    }
  
   
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getCartItems(@Req() request: any) {
      const user: JwtPayload = request.user;
  
      // Debugging logs for request details
      console.log('Fetching cart items for User ID:', user.userId);
  
      // Ensure user is authenticated
      if (!user || !user.userId) {
        throw new BadRequestException('User not authenticated');
      }
  
      // Fetch cart items
      return this.cartService.getCartItems(user.userId);
    }
  
    /**
     * Delete a specific item from the cart.
     */
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteFromCart(@Req() request: any, @Param('id') id: number) {
      const user: JwtPayload = request.user;
  
      // Debugging logs for request details
      console.log(`Deleting item with ID ${id} for User ID:`, user.userId);
  
      // Ensure user is authenticated
      if (!user || !user.userId) {
        throw new BadRequestException('User not authenticated');
      }
  
      // Proceed to delete item from cart
      return this.cartService.deleteFromCart(user.userId, id);
    }
  }
  