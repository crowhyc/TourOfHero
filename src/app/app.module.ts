import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

@Injectable({ providedIn: 'root' })

@NgModule({
   declarations: [AppComponent, HeroComponent, HeroDetailComponent, MessagesComponent, DashboardComponent],
   imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule { }
