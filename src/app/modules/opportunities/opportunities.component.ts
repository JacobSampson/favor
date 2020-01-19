import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import Opportunity from 'src/app/core/models/opportunity';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {

  public cards: Promise<Opportunity[]> = this.fb.getOpportunities();

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
  }

}
