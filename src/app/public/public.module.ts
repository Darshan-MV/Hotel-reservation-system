import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhomeComponent } from './components/phome/phome.component';
import { PaboutComponent } from './components/pabout/pabout.component';
import { PcontactComponent } from './components/pcontact/pcontact.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PhomeComponent,
    PaboutComponent,
    PcontactComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ]
})
export class PublicModule { }
