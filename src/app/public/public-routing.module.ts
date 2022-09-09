import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaboutComponent } from './components/pabout/pabout.component';
import { PcontactComponent } from './components/pcontact/pcontact.component';
import { PhomeComponent } from './components/phome/phome.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {path:'public',component:PublicComponent,
  children:[
    {path:'pabout',component:PaboutComponent},
    {path:'phome',component:PhomeComponent},
    {path:'pcontact',component:PcontactComponent}
]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
