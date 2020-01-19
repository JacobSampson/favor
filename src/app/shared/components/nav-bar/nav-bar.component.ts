import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public fb: FirebaseService) { }

  ngOnInit() {
  }

}
