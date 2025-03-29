import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Reject expired tokens
      secretOrKey: 'superapp', // Make sure this is the same secret used to sign the token
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    console.log('Decoded JWT Payload:', payload); // Log the decoded payload to confirm the validity
    return { userId: payload.userId, email: payload.email };
  }
}

