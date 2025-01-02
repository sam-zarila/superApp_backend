
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';



@Injectable()
export class FirebaseService {
    private FirebaseApp:admin.app.App

    constructor(){
        this.FirebaseApp = admin.initializeApp({
            credential: admin.credential.applicationDefault()
            
        });
    }
}
