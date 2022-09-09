import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BookComponent } from './components/book/book.component';
import { CancleComponent } from './components/cancle/cancle.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ReplyComponent } from './components/reply/reply.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent,
  children:[
    {path:'book',component:BookComponent},
    {path:'cancle',component:CancleComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'hotel',component:HotelComponent},
  {path:'reply',component:ReplyComponent},
  {path:'user-list',component:UserListComponent}
]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
