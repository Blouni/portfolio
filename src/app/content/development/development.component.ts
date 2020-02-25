import { Component, OnInit } from '@angular/core';
import { List } from '../../model/list';
import { DataService } from '../../shared/service/data.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  lists: Array<List> = new Array<List>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.lists = this.dataService.developmentData;
  }

}
