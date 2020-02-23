import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContentModule } from './content/content.module';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { DevopsComponent } from './content/devops/devops.component';
import { SecurityComponent } from './content/security/security.component';
import { DevelopmentComponent } from './content/development/development.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    DevelopmentComponent, 
    DevopsComponent, 
    SecurityComponent, 
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ContentModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
