import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardList: Card[] = new Array<Card>();

  constructor() { }
  ngOnInit(): void {
    
  }

}
