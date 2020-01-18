import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../core/firebase/firebase.service'

@Component({
  selector: 'app-iso-card',
  templateUrl: './iso-card.component.html',
  styleUrls: ['./iso-card.component.scss']
})
export class IsoCardComponent implements OnInit {

  constructor(private fb : FirebaseService) { }

  title = "a couch";
  payment = 85.50
  posted = new Date().toLocaleString();
  description: "I am looking for a couch that can convert to a sofa bed."

  ngOnInit() {
  }

}
