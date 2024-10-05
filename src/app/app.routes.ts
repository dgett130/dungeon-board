import { Routes } from '@angular/router';
import {LoginComponent} from "./features/public/login/login.component";
import {HomeComponent} from "./features/private/home/home.component";
import {DefaultLayoutComponent} from "./core/default-layout/default-layout.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'', component: DefaultLayoutComponent, children: [
      { path: 'home', component: HomeComponent }
    ]},

  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
