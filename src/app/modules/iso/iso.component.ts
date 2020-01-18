import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-iso',
  templateUrl: './iso.component.html',
  styleUrls: ['./iso.component.scss']
})
export class IsoComponent implements OnInit {

  cards = this.fb.getUnfulilledISORequests();

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.cards.then(console.log);
  }

}
