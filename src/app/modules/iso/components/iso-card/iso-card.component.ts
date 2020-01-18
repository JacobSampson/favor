import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../../../core/firebase/firebase.service'
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-iso-card',
  templateUrl: './iso-card.component.html',
  styleUrls: ['./iso-card.component.scss']
})
export class IsoCardComponent implements OnInit {

  @Input() card: IsoRequest;

  constructor() { }

  // to = 'Avery'
  // from = 'Kauffman'
  // location = 'to ' + this.to + (this.from ? ' from ' + this.from : '');

  // title = 'I need help moving a couch.';
  // payment = 15.25;
  // posted = new Date().toLocaleString();
  // description = 'It\'s a really big couch and I need to move it into my dorm.';

  // location = 'to ' + this.model.toLocation + (this.model.fromLocation ? ' from ' + this.model.fromLocation : '');


  ngOnInit() {
  }
}
