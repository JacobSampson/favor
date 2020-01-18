import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../core/firebase/firebase.service'

@Component({
  selector: 'app-iso-card',
  templateUrl: './iso-card.component.html',
  styleUrls: ['./iso-card.component.scss']
})
export class IsoCardComponent implements OnInit {

  constructor(private fb : FirebaseService) { }

  to = "Avery"
  from = "Kauffman"
  location = "to " + this.to + (this.from ? " from " + this.from : "");

  title = "I need help moving a couch.";
  payment = 15.25;
  posted = new Date().toLocaleString();
  description = "It's a really big couch and I need to move it into my dorm.";

  ngOnInit() {
  }
}
