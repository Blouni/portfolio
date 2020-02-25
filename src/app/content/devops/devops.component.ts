import { Component, OnInit } from '@angular/core';
import { List } from '../../model/list';
import { DataService } from '../../shared/service/data.service';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.scss']
})
export class DevopsComponent implements OnInit {

  lists: Array<List> = new Array<List>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.lists = this.dataService.devopsData;
  }

}
