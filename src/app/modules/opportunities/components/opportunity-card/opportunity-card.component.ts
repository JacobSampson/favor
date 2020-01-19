import { Component, OnInit, Input } from '@angular/core';
import Opportunity from 'src/app/core/models/opportunity';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.scss']
})
export class OpportunityCardComponent implements OnInit {

  @Input() card: Opportunity;

  public isOpen = false;

  constructor(public fb: FirebaseService) { }

  ngOnInit() {
    console.log(this.card)
  }

}
