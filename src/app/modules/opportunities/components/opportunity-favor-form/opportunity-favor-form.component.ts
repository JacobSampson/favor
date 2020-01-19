import { Component, OnInit } from '@angular/core';
import OpportunityFavorRequest from 'src/app/core/models/opportunity-favor-request';

@Component({
  selector: 'app-opportunity-favor-form',
  templateUrl: './opportunity-favor-form.component.html',
  styleUrls: ['./opportunity-favor-form.component.scss']
})
export class OpportunityFavorFormComponent implements OnInit {

  public model: OpportunityFavorRequest = this.reset();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.model = this.reset();
  }

  reset(): OpportunityFavorRequest {
    return new OpportunityFavorRequest(
      null, // description
      null  // payment
    )
  }

}
