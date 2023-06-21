import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { NavbarSubComponent } from './navbar-sub/navbar-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    NavbarSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
