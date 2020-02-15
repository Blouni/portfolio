import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() set cardList(cardList: Array<Card>){
    this._cardList = cardList;
  }
  _cardList: Card[] = new Array<Card>();
  constructor() { }

  ngOnInit(): void {
  }

}
