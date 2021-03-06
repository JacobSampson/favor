import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private DIR_BASE = 'https://www.google.com/maps/dir/?api=1';

  constructor() { }

  /**
   * Gets google maps url that will display directions from specificied from location to specified to location
   *
   * @param from
   * @param to
   */
  public getDirectionsFromToUrl(from: string, to: string): string {
    let str = this.DIR_BASE + '&origin=' + encodeURIComponent(from);
    str += '&destination=' + encodeURIComponent(to);
    return str;
  }

  /**
   * Get google maps url that will display directions from user's current location to specified to location
   *
   * @param to
   */
  public getDirectionsToUrl(to: string): string {
    return this.DIR_BASE + '&destination=' + encodeURIComponent(to);
  }
}
