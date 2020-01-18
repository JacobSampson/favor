import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { GoogleUser } from '../models/google-user';
import IsoRequest from '../models/iso-request';
import School from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user$: Observable<User>;
  user: User;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )

    this.user$.subscribe(user => {
      this.user = user;
    });
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
      photoUrl: googleUser.photoURL
    }

    return userRef.set(data, { merge: true })
  }

  public updateUser(user: User) {
    const userRef: AngularFirestoreDocument<GoogleUser> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      name: user.name,
      photoUrl: user.photoUrl,
      school: user.school,
      email: user.email
    };

    return userRef.set(data, { merge: true })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  // ISO - Request

  // Get all unfulfilled ISO requests
  public getUnfulilledISORequests() {
    const requests = this.afs.doc<School>('schools/OZX5hT70yyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;
          if (!request.fullfilled && !request.userFulfilling) {
            requests.push(request);
          }
        });

        resolve(requests);
      });
    });
  }

  // Get all unfulfilled ISO requests by posting User
  public getUnfulfilledISORequestsByPostingUser() {
    const requests = this.afs.doc<School>('schools/OZX5hT70yyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;
          if (!request.fullfilled && !request.userFulfilling && request.userPosted.uid === this.user.uid) {
            requests.push(request);
          }
        });

        resolve(requests);
      });
    });
  }

  // Get all fulfilling ISO requests by fulfilling User
  public getFulfilledISORequestsByFulfillingUser() {
    const requests = this.afs.doc<School>('schools/OZX5hT70yyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;
          if (request.userFulfilling && request.userFulfilling.uid === this.user.uid) {
            requests.push(request);
          }
        });

        resolve(requests);
      });
    });
  }

  // Get all fulfilling ISO requests by posting User
  public getFulfilledISORequestsByPostingUser() {
    const requests = this.afs.doc<School>('schools/OZX5hT70yyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;
          if (request.userFulfilling && request.userPosted.uid === this.user.uid) {
            requests.push(request);
          }
        });

        resolve(requests);
      });
    });
  }

  // Add ISO request
  public addIsoRequest(isoRequest: IsoRequest) {
    // Set date added and date updated
    isoRequest.postedDate = new Date();

    return this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('iso-requests').add(isoRequest)
  }
}
