import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public cardsActiveRequests: Promise<IsoRequest[]> = this.fb.getUnfulfilledIsoRequestsByPostingUser();
  public cardsFulfilledRequests: Promise<IsoRequest[]> = this.fb.getFulfilledIsoRequestsByPostingUser();

  constructor(public fb: FirebaseService) { }

  ngOnInit() {
    
  }

}
