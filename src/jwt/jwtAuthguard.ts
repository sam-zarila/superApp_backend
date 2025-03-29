// jwt-auth.guard.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    // If there's an error or no user, throw an Unauthorized exception.
    if (err || !user) {
      throw err || new UnauthorizedException('User not authenticated');
    }
    return user;
  }
}
