import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteModule } from "./route/route.module";
import {RouterModule} from "@angular/router";
import { ProductComponent } from './product/product.component';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import{  MatMenuModule} from "@angular/material/menu";
import { MatListModule }from "@angular/material/list";
import{ MatButtonModule } from"@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import{ MatGridListModule } from "@angular/material/grid-list";
import {StoreInfoService} from "./store-info.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [StoreInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
