import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-iso',
  templateUrl: './iso.component.html',
  styleUrls: ['./iso.component.scss']
})
export class IsoComponent implements OnInit {

  public cards: Promise<IsoRequest[]> = this.fb.getUnfulilledIsoRequests();

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.cards.then(console.log);
  }

}
