import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'
import { ContactcovidComponent } from '../contactcovid/contactcovid.component'
import { LoginComponent } from '../login/login.component'
import { SignupComponent } from '../signup/signup.component' 
import { AboutComponent } from '../about/about.component'

const routes: Routes = [
  { path: '/',component: HomeComponent,},
      { path: 'contactcovid', component: ContactcovidComponent },
      { path: 'aboutus', component: AboutComponent },
      { path: 'login', component:LoginComponent },
      { path: 'signup', component:SignupComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
