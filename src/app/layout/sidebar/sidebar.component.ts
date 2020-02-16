import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toogleSidebar(){
    this.active = !this.active;
  }
  toogleSidebarIfActive(){
    if(this.active){
      this.active = false;
    }
  }
}
