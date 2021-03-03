import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { OrderService } from './order.service';
import { PaginationConfig, PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule ,

    HttpClientModule,
    PaginationModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  providers: [OrderService,PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
