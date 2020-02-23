import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../assets/data/navbar.json';
import { navItem } from '../../model/navItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active: boolean = false;
  navBar: Array<navItem> = data;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toogleSidebar() {
    this.active = !this.active;
  }

  toogleSidebarIfActive() {
    if (this.active) {
      this.active = false;
    }
  }

  updateRoute(route:string){
    if(this.router.url !== "/" + route){
      this.active = false;
    }
  }
}
