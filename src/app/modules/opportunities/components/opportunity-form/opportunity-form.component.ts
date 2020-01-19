import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import Opportunity from 'src/app/core/models/opportunity';
import { dateTimeStringsToDate } from 'src/app/core/utilities/date-time';

@Component({
  selector: 'app-opportunity-form',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.scss']
})
export class OpportunityFormComponent implements OnInit {

  public startDate: Date;
  public startTime: string;
  public endDate: Date;
  public endTime: string;

  public model: Opportunity = this.reset();

  constructor(private fb: FirebaseService) { }

  ngOnInit() { }

  onSubmit() {
    this.model.startDate = dateTimeStringsToDate(
      this.startDate.toString(),
      this.startTime
    );
    this.model.endDate = dateTimeStringsToDate(
      this.endDate.toString(),
      this.endTime
    );

    this.fb.addOpportunity(this.model);
    this.model = this.reset();
  }

  reset(): Opportunity {
    return new Opportunity(
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
  }
}
