import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwtstrategy';

@Module({
  imports: [
    
    NestJwtModule.register({
      secret: 'superapp', // Hardcoded secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [JwtStrategy],  // Provide the JwtStrategy for use in other services
  exports: [NestJwtModule], // Export the configured JwtModule for use in other modules
})
export class JwtModule {}
