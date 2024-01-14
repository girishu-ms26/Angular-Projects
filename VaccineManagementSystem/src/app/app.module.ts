import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitizensComponent } from './citizens/citizens.component';
import { CitizenService } from './Services/citizen.service';
import { AddCitizenComponent } from './add-citizen/add-citizen.component';
import { UpdateCitizenComponent } from './update-citizen/update-citizen.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    CitizensComponent,
    AddCitizenComponent,
    UpdateCitizenComponent,
    HomeComponent,
    AdminloginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CitizenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
