import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-iso-form',
  templateUrl: './iso-form.component.html',
  styleUrls: ['./iso-form.component.scss']
})
export class IsoFormComponent implements OnInit {

  public model: IsoRequest = this.reset();

  constructor(private fb: FirebaseService) { }

  ngOnInit() { }

  onSubmit() {
    this.fb.addIsoRequest(this.model);
    this.model = this.reset();
  }

  reset(): IsoRequest {
    return new IsoRequest(
      null, // id
      null, // title
      null, // description
      null, // payment
      null, // postedDate
      null, // fullfillmentDate
      null, // to
      null, // from
      null, // userPosted
      null, // fullfilled
      null  // userFulfilling
    );
  }
}
