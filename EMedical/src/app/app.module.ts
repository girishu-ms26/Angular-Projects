import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminService } from './services/admin.service';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartComponent } from './userpage/cart/cart.component';
import { CartService } from './services/cart.service';
import { MedicineService } from './services/medicines.service';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    UserComponent,
    RegistrationComponent,
    AboutComponent,
    FooterComponent,
    UserpageComponent,
    AdminpageComponent,
    CartComponent,
    ContactComponent
  ],
  imports: [HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService,AdminService,CartService,MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
