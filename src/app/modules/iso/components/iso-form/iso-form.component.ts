import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-iso-form',
  templateUrl: './iso-form.component.html',
  styleUrls: ['./iso-form.component.scss']
})
export class IsoFormComponent implements OnInit {

  public model: IsoRequest = new IsoRequest(
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

  constructor(private fb: FirebaseService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.model);
    this.fb.addIsoRequest(this.model);
  }

}
