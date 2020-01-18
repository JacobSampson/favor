import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../../../core/firebase/firebase.service'
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-iso-card',
  templateUrl: './iso-card.component.html',
  styleUrls: ['./iso-card.component.scss']
})
export class IsoCardComponent implements OnInit {

  @Input() model: IsoRequest;

  constructor() { }

  // to = 'Avery'
  // from = 'Kauffman'
  // location = 'to ' + this.to + (this.from ? ' from ' + this.from : '');

  // title = 'I need help moving a couch.';
  // payment = 15.25;
  // posted = new Date().toLocaleString();
  // description = 'It\'s a really big couch and I need to move it into my dorm.';

  to = this.model.toLocation;
  from = this.model.fromLocation;
  location = 'to ' + this.model.toLocation + (this.model.fromLocation ? ' from ' + this.model.fromLocation : '');

  title = this.model.title;
  payment = this.model.paymentAmount;
  posted = this.model.postedDate;
  description = this.model.description;


  ngOnInit() {
  }
}
