import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ExistinguserModule } from './home/existinguser/existinguser.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './home/adduser/adduser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdduserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExistinguserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
