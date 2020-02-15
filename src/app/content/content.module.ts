import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DevelopmentComponent } from './development/development.component';
import { DevopsComponent } from './devops/devops.component';
import { SecurityComponent } from './security/security.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'development', component: HomeComponent, data: { title: 'Development' } },
    { path: 'devops', component: HomeComponent, data: { title: 'Devops' } },
    { path: 'security', component: HomeComponent, data: { title: 'Security' } }
];
@NgModule({
  declarations: [
    HomeComponent, 
    DevelopmentComponent, 
    DevopsComponent, 
    SecurityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ContentModule { }
