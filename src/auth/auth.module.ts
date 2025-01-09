import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.auth_entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt/jwtstrategy';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt' }),
    JwtModule.register({
       secret:'superapp',
       signOptions:{expiresIn:'1h'}
    }),
    
    TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports:[JwtModule,PassportModule]
})
export class AuthModule {}
