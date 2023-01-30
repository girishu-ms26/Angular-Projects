import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path:"",component: LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"book",component: BookComponent},
  {path:"contact",component: ContactComponent},
  {path:"gallery",component: GalleryComponent},
  {path:"policy",component: PolicyComponent},
  {path:"registration",component: RegistrationComponent},
  {path:"header",component: HeaderComponent},
  {path:"adminlogin",component: AdminloginComponent },
  {path:"booking",component: BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

