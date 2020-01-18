import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { GoogleUser } from '../models/google-user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credentials.user);
  }

  private updateUserData(googleUser) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<GoogleUser> = this.afs.doc(`users/${googleUser.uid}`);

    const data = {
      uid: googleUser.uid,
      name: googleUser.displayName,
      email: googleUser.email,
    };

    return userRef.set(data, { merge: true })
  }

  public updateUser(user: User) {
    const userRef: AngularFirestoreDocument<GoogleUser> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      name: user.name,
      school: user.school,
      email: user.email
    };

    return userRef.set(data, { merge: true })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }
}
