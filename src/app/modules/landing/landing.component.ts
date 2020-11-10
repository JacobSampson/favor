import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  public theyAreFulfilling: Promise<IsoRequest[]> = this.fb.getFulfillingIsoRequestsByPostingUser();
  public theyHaveFulfilled: Promise<IsoRequest[]> = this.fb.getFulfilledIsoRequestsByPostingUser();
  public iAmFulfilling: Promise<IsoRequest[]> = this.fb.getFulfillingIsoRequestsByFulfillingUser();
  public iHaveFulfilled: Promise<IsoRequest[]> = this.fb.getFulfilledIsoRequestsByFulfillingUser();

  constructor(public fb: FirebaseService) { }
}
