import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { userLogin } from 'src/cart/dto/user_Login.dto';
import { userRegister } from 'src/cart/dto/user_Register.dto';


@ApiTags('user Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userregster:userRegister){
    return this.authService.register(userregster.name, userregster.email, userregster.password);
  }

  @Post('login')
  async login(@Body() loginDto: userLogin) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
