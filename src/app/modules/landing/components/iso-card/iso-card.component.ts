import { Component, OnInit, Input } from '@angular/core';
import IsoRequest from 'src/app/core/models/iso-request';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';

@Component({
  selector: 'app-iso-card',
  templateUrl: './iso-card.component.html',
  styleUrls: ['./iso-card.component.scss']
})
export class IsoCardComponent implements OnInit {

  @Input() card: IsoRequest;

  constructor(public fb: FirebaseService) { }

  ngOnInit() { }

}
