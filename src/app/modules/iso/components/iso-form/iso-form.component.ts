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

  public fulfillmentDate: Date;
  public fulfillmentTime: string;

  constructor(private fb: FirebaseService) { }

  ngOnInit() { }

  onSubmit() {
    const timeParts = this.fulfillmentTime.split(':');

    // Set fulfillment date and time manually, modified to use separate time field by Jacob Sampson
    // https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript
    const dateParts = this.fulfillmentDate.toString().split('-');
    const fulfillmentTotalDate = new Date(
      Number.parseInt(dateParts[0]),
      Number.parseInt(dateParts[1]) - 1,
      Number.parseInt(dateParts[2])
    );
    fulfillmentTotalDate.setUTCMilliseconds(fulfillmentTotalDate.getUTCMilliseconds() +
      Number.parseInt(timeParts[0]) * 60 * 60 * 1000 +
      Number.parseInt(timeParts[1]) * 60 * 1000);

    this.model.fulfillmentDate = fulfillmentTotalDate;

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
