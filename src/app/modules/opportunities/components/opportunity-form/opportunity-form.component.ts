import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import Opportunity from 'src/app/core/models/opportunity';

@Component({
  selector: 'app-opportunity-form',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.scss']
})
export class OpportunityFormComponent implements OnInit {

  public model: Opportunity = new Opportunity(
    null, // id
    null, // title
    null, // description
    null, // postedDate
    null, // startDate
    null, // endDate
    null, // toLocation
    null, // fromLocation
    null, // userPosted
    null, // requests
  );

  constructor(private fb: FirebaseService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.model);
    this.fb.addOpportunity(this.model);
  }
}
