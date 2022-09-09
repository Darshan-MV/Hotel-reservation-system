import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { CancleComponent } from './components/cancle/cancle.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ReplyComponent } from './components/reply/reply.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookComponent,
    CancleComponent,
    FeedbackComponent,
    ReplyComponent,
    HotelComponent,
    UserListComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
