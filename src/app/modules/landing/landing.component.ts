import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public fb: FirebaseService) { }

  ngOnInit() {

    this.fb.getIsoRequest('BufySuoI4UZWg36jXvcR').subscribe(result => {
      console.log(result);
    })
  }

}
