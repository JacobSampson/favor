import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import Opportunity from 'src/app/core/models/opportunity';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-opportunity-favor-form',
  templateUrl: './opportunity-favor-form.component.html',
  styleUrls: ['./opportunity-favor-form.component.scss']
})
export class OpportunityFavorFormComponent implements OnInit {

  @Input() opportunity: Opportunity;

  public model: IsoRequest = this.reset();

  constructor(private fb: FirebaseService) { }

  ngOnInit() { }

  onSubmit() {
    this.fb.requestFavor(this.opportunity, this.model);
    this.model = this.reset();
  }

  reset(): IsoRequest {
    return new IsoRequest(
      null, // description
      null,  // payment
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }

}
