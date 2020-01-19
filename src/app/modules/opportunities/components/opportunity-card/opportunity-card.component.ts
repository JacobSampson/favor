import { Component, OnInit, Input } from '@angular/core';
import Opportunity from 'src/app/core/models/opportunity';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.scss']
})
export class OpportunityCardComponent implements OnInit {

  @Input() card: Opportunity;

  ngOnInit() { }

}
