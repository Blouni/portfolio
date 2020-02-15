import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() set card(card: Card){
    this._card = card;
  }
  _card: Card = new Card();
  constructor() { }

  ngOnInit(): void {
  }

}
