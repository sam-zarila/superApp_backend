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
      secretOrKey: 'your-secret-key', // Use the same secret as in the JwtModule
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    // `validate` is called after the token is decoded and validated
    // Payload includes userId and additional data
    return { userId: payload.userId, email: payload.email };
  }
}
