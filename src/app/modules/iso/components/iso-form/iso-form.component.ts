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
    // Set fulfillment date and time manually
    // https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript
    var parts = this.model.fulfillmentDate.toString().split('-');
    var fulfillmentDate = new Date(Number.parseInt(parts[0]), 
        Number.parseInt(parts[1]) - 1, Number.parseInt(parts[2])); 

    this.model.fulfillmentDate = fulfillmentDate

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
