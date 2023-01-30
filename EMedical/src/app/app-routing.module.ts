import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartComponent } from './userpage/cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
 {path:"header", component:HeaderComponent},
  {path:"", component:HomeComponent},
  {path:"admin", component:AdminComponent},
  {path:"user", component:UserComponent},
  {path:"about", component:AboutComponent},
  {path:"footer", component:FooterComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"adminpage", component:AdminpageComponent},
  {path:"userpage", component:UserpageComponent},
  {path:"cart", component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
