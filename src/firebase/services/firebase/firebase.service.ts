// import { Injectable } from '@nestjs/common';
// import * as admin from 'firebase-admin';

// @Injectable()
// export class FirebaseService {
//   constructor() {
//     // Check if Firebase is already initialized to avoid the error
//     if (!admin.apps.length) {
//       admin.initializeApp({
//         credential: admin.credential.applicationDefault(),
//       });
//     }
//   }

//   // Method to verify Firebase ID token
//   async verifyToken(idToken: string) {
//     try {
//       const decodedToken = await admin.auth().verifyIdToken(idToken);
//       return decodedToken;
//     } catch (error) {
//       throw new Error('Invalid token');
//     }
//   }
// }
