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
import Opportunity from '../models/opportunity';
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
  public getUnfulilledIsoRequests() {
    const requests = this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;

          // Manually convert time stamps to date
          request.postedDate = doc.data().postedDate.toDate()
          request.fulfillmentDate = doc.data().fulfillmentDate.toDate()

          if (!request.fullfilled && !request.userFulfilling) {
            requests.push(request);
          }
        });

        resolve(requests);
      });
    });
  }

  // Get all fulfilling ISO requests by fulfilling User
  public getFulfillingIsoRequestsByFulfillingUser() {
    const requests = this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;

          // Manually convert time stamps to date
          request.postedDate = doc.data().postedDate.toDate()
          request.fulfillmentDate = doc.data().fulfillmentDate.toDate()

          if (!request.fullfilled && request.userFulfilling && request.userFulfilling.uid === this.user.uid) {
            requests.push(request);
          }
        });

        resolve(requests);
      });
    });
  }

  // Get all fulfilling ISO requests by posting User
  public getFulfillingIsoRequestsByPostingUser() {
    const requests = this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;

          // Manually convert time stamps to date
          request.postedDate = doc.data().postedDate.toDate()
          request.fulfillmentDate = doc.data().fulfillmentDate.toDate()
          
          if (!request.fullfilled && request.userFulfilling && request.userPosted.uid === this.user.uid) {
            requests.push(request);
          }
        });

        resolve(requests);

        console.log(requests);
      });
    });
  }

  // Get all fulfilled ISO requests by fulfilling User
  public getFulfilledIsoRequestsByFulfillingUser() {
    const requests = this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;

          // Manually convert time stamps to date
          request.postedDate = doc.data().postedDate.toDate()
          request.fulfillmentDate = doc.data().fulfillmentDate.toDate()

          if (request.fullfilled && request.userFulfilling && request.userFulfilling.uid === this.user.uid) {
            requests.push(request);
          }
        });

        resolve(requests);
      });
    });
  }

  // Get all fulfilled ISO requests by posting User
  public getFulfilledIsoRequestsByPostingUser() {
    const requests = this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('iso-requests');
    return new Promise<IsoRequest[]>((resolve, reject) => {
      requests.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<IsoRequest>();

        docs.forEach(doc => {
          const request = doc.data() as IsoRequest;
          request.id = doc.id;

          // Manually convert time stamps to date
          request.postedDate = doc.data().postedDate.toDate()
          request.fulfillmentDate = doc.data().fulfillmentDate.toDate()
          
          if (request.fullfilled && request.userFulfilling && request.userPosted.uid === this.user.uid) {
            requests.push(request);
          }
        });

        resolve(requests);

        console.log(requests);
      });
    });
  }

  // Get ISO request
  public getIsoRequest(id: string) {
    return this.afs.doc<School>(`schools/OZX5hT7OyyHsSh00Z5M6/iso-requests/${id}`).valueChanges();
  }

  // Update ISO request
  public updateIsoRequest(isoRequest: IsoRequest) {
    return this.afs.doc<IsoRequest>(`schools/OZX5hT7OyyHsSh00Z5M6/iso-requests/${isoRequest.id}`).update({...isoRequest});
  }

  // Delete ISO Request
  public deleteIsoRubric(isoRequest: IsoRequest) {
    return this.afs.doc<IsoRequest>(`schools/OZX5hT7OyyHsSh00Z5M6/iso-requests/${isoRequest.id}`).delete();
  }

  // Add ISO Request
  public addIsoRequest(isoRequest: IsoRequest) {
    // Set date added and date updated
    isoRequest.postedDate = new Date();
    isoRequest.userPosted = this.user;

    return this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('iso-requests').add({...isoRequest})
  }

  // Fulfill ISO Request
  public fulfillIsoRequest(isoRequest: IsoRequest) {
    isoRequest.userFulfilling = this.user;
    return this.updateIsoRequest(isoRequest);
  }

  // Mark ISO Request as Fulfilled
  public markIsoRequestAsFulfilled(isoRequest: IsoRequest) {
    isoRequest.fullfilled = true;
    return this.updateIsoRequest(isoRequest);
  }

  // Opportunity

  // Get Opportunities
  public getOpportunities() {
    const opportunities = this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('opportunities');
    return new Promise<Opportunity[]>((resolve, reject) => {
      opportunities.ref.get({ source: "server" }).then(data => {
        const docs = data.docs;
        const requests = Array<Opportunity>();

        docs.forEach(doc => {
          const opportunity = doc.data() as Opportunity;
          opportunity.id = doc.id;
          requests.push(opportunity);
        });

        resolve(requests);
      });
    });
  }

  // Add Opportunity
  public addOpportunity(opportunity: Opportunity) {
    // Set date added and date updated
    opportunity.postedDate = new Date();
    opportunity.userPosted = this.user;

    return this.afs.doc<School>('schools/OZX5hT7OyyHsSh00Z5M6').collection('opportunities').add({...opportunity})
  }

  // School

  // Get all schools
  public getAllSchools(): Promise<School[]> {
    const schools = this.afs.collection<School>('schools');

    return new Promise<School[]>((resolve, reject) => {
      schools.ref.get({ source:"server" }).then (data => {
        const docs = data.docs;
        const schools = Array<School>();

        docs.forEach(doc => {
          const school = doc.data() as School
          school.id = doc.id
          schools.push(school)
        })

        resolve(schools);
      });
    });
  }
}
