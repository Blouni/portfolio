import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service';
import { List } from '../../model/list';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  lists: Array<List> = new Array<List>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.lists = this.dataService.securityData;
  }

}
