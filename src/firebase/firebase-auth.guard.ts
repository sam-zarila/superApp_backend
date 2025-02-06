import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      console.error('No token found in request');
      return false;
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log('Decoded Firebase Token:', decodedToken);
      request.user = decodedToken;
      return true;
    } catch (error) {
      console.error('Invalid Firebase Token:', error);
      return false;
    }
  }
}
