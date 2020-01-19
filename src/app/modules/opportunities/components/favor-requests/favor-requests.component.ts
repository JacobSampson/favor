import { Component, OnInit, Input } from '@angular/core';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-favor-requests',
  templateUrl: './favor-requests.component.html',
  styleUrls: ['./favor-requests.component.scss']
})
export class FavorRequestsComponent implements OnInit {

  @Input() request: IsoRequest;

  constructor() { }

  ngOnInit() {
  }

}
