import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancleComponent } from './components/cancle/cancle.component';
import { CheckComponent } from './components/check/check.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ReciptComponent } from './components/recipt/recipt.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { UaboutComponent } from './components/uabout/uabout.component';
import { UbookComponent } from './components/ubook/ubook.component';
import { UcontactComponent } from './components/ucontact/ucontact.component';
import { UfeedbackComponent } from './components/ufeedback/ufeedback.component';
import { UhomeComponent } from './components/uhome/uhome.component';
import { UrestaurantComponent } from './components/urestaurant/urestaurant.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'user',component:UserComponent,
  children:[
    {path:'uabout',component:UaboutComponent},
    {path:'uhome',component:UhomeComponent},
    {path:'ucontact',component:UcontactComponent},
    {path:'ubook',component:UbookComponent},
  {path:'ufeedback',component:UfeedbackComponent},
  {path:'urestaurant',component:UrestaurantComponent},
  {path:'check',component:CheckComponent},{
    path:'cancle',component:CancleComponent
  },{path:'hotel',component:HotelComponent},
  {path:'thanks',component:ThanksComponent},
  {path:'recipt',component:ReciptComponent}
]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
