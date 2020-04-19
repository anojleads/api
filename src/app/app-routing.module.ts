import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent} from './menu/menu.component';
import { FindUsComponent } from './find-us/find-us.component';
import {OrderComponent  } from './order/order.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'find-us', component: FindUsComponent},
  { path: 'Order', component: OrderComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
