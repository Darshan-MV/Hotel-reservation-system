import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './component/wallet/wallet.component';
import { ReciptComponent } from './component/recipt/recipt.component';
import { BthanksComponent } from './component/bthanks/bthanks.component';
import { CthanksComponent } from './component/cthanks/cthanks.component';
import { DoneComponent } from './done.component';
import { DoneRoutingModule } from './done-routing.module';



@NgModule({
  declarations: [
    WalletComponent,
    ReciptComponent,
    BthanksComponent,
    CthanksComponent,
    DoneComponent
  ],
  imports: [
    CommonModule,
    DoneRoutingModule
  ]
})
export class DoneModule { }
