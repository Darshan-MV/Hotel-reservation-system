import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DoneModule } from './done/done.module';
import { PublicModule } from './public/public.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserModule,
    PublicModule,
    AdminModule,
    DoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
