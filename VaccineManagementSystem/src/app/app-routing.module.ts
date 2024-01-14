import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCitizenComponent } from './add-citizen/add-citizen.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CitizensComponent } from './citizens/citizens.component';
import { HomeComponent } from './home/home.component';
import { UpdateCitizenComponent } from './update-citizen/update-citizen.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'list',component:CitizensComponent},
  {path:'add', component:AddCitizenComponent},
  {path:'update/:refid',component:UpdateCitizenComponent},
  {path:'login',component:AdminloginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
