import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { NgsRevealModule } from 'ng-scrollreveal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    NgsRevealModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
