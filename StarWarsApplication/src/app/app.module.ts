import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {StarWarsComponent} from '../components/star-wars/star-wars.component'
=======
import { StarWarsComponent } from 'src/components/star-wars/star-wars.component';
>>>>>>> 9c0a0013d9a9e780762b81551ab3ab26a17d8c81
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
