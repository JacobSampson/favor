import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import Opportunity from 'src/app/core/models/opportunity';
import OpportunityFavorRequest from 'src/app/core/models/opportunity-favor-request';

@Component({
  selector: 'app-opportunity-favor-form',
  templateUrl: './opportunity-favor-form.component.html',
  styleUrls: ['./opportunity-favor-form.component.scss']
})
export class OpportunityFavorFormComponent implements OnInit {

  @Input() opportunity: Opportunity;

  public model: OpportunityFavorRequest = this.reset();

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.fb.requestFavor(this.opportunity, this.model);
    this.model = this.reset();
  }

  reset(): OpportunityFavorRequest {
    return new OpportunityFavorRequest(
      null, // description
      null  // payment
    );
  }

}
