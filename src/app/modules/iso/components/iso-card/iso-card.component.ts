import { Component, OnInit, Input } from '@angular/core';
import IsoRequest from 'src/app/core/models/iso-request';

@Component({
  selector: 'app-iso-card',
  templateUrl: './iso-card.component.html',
  styleUrls: ['./iso-card.component.scss']
})
export class IsoCardComponent implements OnInit {

  @Input() card: IsoRequest;

  ngOnInit() {
    console.log( this.card.postedDate.getMonth() + "/" + this.card.postedDate.getDate() + "/" + this.card.postedDate.getFullYear() + " " + this.card.postedDate.getHours() + ":" + this.card.postedDate.getMinutes());
  }
}
