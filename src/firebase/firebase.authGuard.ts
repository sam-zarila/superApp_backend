// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { FirebaseService } from './services/firebase/firebase.service';

// @Injectable()
// export class FirebaseAuthGuard implements CanActivate {
//     constructor(private readonly firebaseService: FirebaseService) {}

//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const request = context.switchToHttp().getRequest();
//         const authHeader = request.headers.authorization;

//         if (!authHeader) {
//             throw new UnauthorizedException('Authorization header missing');
//         }

//         const token = authHeader.split('Bearer ')[1];
//         if (!token) {
//             throw new UnauthorizedException('Firebase token missing');
//         }

//         try {
//             const decodedToken = await this.firebaseService.verifyToken(token);
//             request.user = decodedToken; // Attach the user's UID to the request
//             return true;
//         } catch {
//             throw new UnauthorizedException('Invalid Firebase token');
//         }
//     }
// }
