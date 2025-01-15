import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extract the JWT from the Authorization header as a Bearer token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Automatically reject expired tokens
      secretOrKey: 'your-secret-key', // Use the same secret key as in the JwtModule configuration
    });
  }

  /**
   * Validate method runs after decoding and validating the JWT.
   * The returned value is attached to the `request.user` object.
   * @param payload - Decoded JWT payload
   * @returns A subset of the payload with essential user details
   */
  async validate(payload: JwtPayload): Promise<JwtPayload> {
    // Return only the relevant user information for further use
    return {
      userId: payload.userId,
      email: payload.email,
    };
  }
}
