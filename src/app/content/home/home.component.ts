import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data/security.json';
import { List } from '../../model/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists: List[] = data;

  constructor() { }
  ngOnInit(): void {
  }

}
