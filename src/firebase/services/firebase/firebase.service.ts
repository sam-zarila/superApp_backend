import { FirebaseApp } from './../../../../node_modules/@firebase/app-types/index.d';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';



@Injectable()
export class FirebaseService {
    private FirebaseApp:admin.app.App
}
