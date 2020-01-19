import { Component, OnInit, Input } from '@angular/core';
import { GoogleMapsService } from 'src/app/core/google-maps/google-maps.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input() fromLocation?: string;
  @Input() toLocation?: string;

  get toLocationLink() {
    return this.googleMapsService.getDirectionsToUrl(this.toLocation);
  }

  get wholeLocationLink() {
    return this.googleMapsService.getDirectionsFromToUrl(this.fromLocation, this.toLocation);
  }

  constructor(private googleMapsService: GoogleMapsService) { }

  ngOnInit() {
  }

}
