import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DevelopmentComponent } from './development/development.component';
import { DevopsComponent } from './devops/devops.component';
import { SecurityComponent } from './security/security.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'development', component: DevelopmentComponent, data: { title: 'Development' } },
  { path: 'devops', component: DevopsComponent, data: { title: 'Devops' } },
  { path: 'security', component: SecurityComponent, data: { title: 'Security' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [
    RouterModule
  ]
})
export class ContentModule { }
