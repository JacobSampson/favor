import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input() fromLocation?: string;
  @Input() toLocation?: string;

  constructor() { }

  ngOnInit() {
  }

}
