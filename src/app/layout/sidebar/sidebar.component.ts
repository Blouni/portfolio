import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../model/navItem';
import { DataService } from '../../shared/service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active: boolean = false;
  navBar: Array<NavItem> = new Array<NavItem>();
  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.navBar = this.dataService.navBar;
  }

  toogleSidebar() {
    this.active = !this.active;
  }

  toogleSidebarIfActive() {
    if (this.active) {
      this.active = false;
    }
  }

  updateRoute(route: string) {
    if (this.router.url !== "/" + route) {
      this.active = false;
    }
  }
}
