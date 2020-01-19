import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseGuard implements CanActivate {
  constructor (private fb: FirebaseService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.fb.user$.pipe(
        take(1),
        map(user => !!user),
        tap(loggedIn => {
          if(!loggedIn) {
            this.router.navigate(['/'])
          }
        })
      );
  }
  
}
