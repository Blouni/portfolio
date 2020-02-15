import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DevelopmentComponent } from './development/development.component';
import { DevopsComponent } from './devops/devops.component';
import { SecurityComponent } from './security/security.component';



@NgModule({
  declarations: [HomeComponent, DevelopmentComponent, DevopsComponent, SecurityComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
