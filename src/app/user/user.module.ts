import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UhomeComponent } from './components/uhome/uhome.component';
import { UaboutComponent } from './components/uabout/uabout.component';
import { UbookComponent } from './components/ubook/ubook.component';
import { UrestaurantComponent } from './components/urestaurant/urestaurant.component';
import { UcontactComponent } from './components/ucontact/ucontact.component';
import { UfeedbackComponent } from './components/ufeedback/ufeedback.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { CheckComponent } from './components/check/check.component';
import { CancleComponent } from './components/cancle/cancle.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ReciptComponent } from './components/recipt/recipt.component';



@NgModule({
  declarations: [
    UhomeComponent,
    UaboutComponent,
    UbookComponent,
    UrestaurantComponent,
    UcontactComponent,
    UfeedbackComponent,
    UserComponent,
    CheckComponent,
    CancleComponent,
    HotelComponent,
    ThanksComponent,
    ReciptComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class UserModule { }
