import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BthanksComponent } from './component/bthanks/bthanks.component';
import { CthanksComponent } from './component/cthanks/cthanks.component';
import { ReciptComponent } from './component/recipt/recipt.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { DoneComponent } from './done.component';


const routes: Routes = [
  {path:'done',component:DoneComponent,
  children:[
    {path:'bthanks',component:BthanksComponent},
    {path:'cthanks',component:CthanksComponent},
    {path:'recipt',component:ReciptComponent},
    {path:'wallet',component:WalletComponent}
]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoneRoutingModule { }
