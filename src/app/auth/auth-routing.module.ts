import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent,
  children:[
    {path:'adminlogin',component:AdminloginComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},
    {path:'signup',component:SignupComponent},
    {path:'userlogin',component:UserloginComponent}
]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
