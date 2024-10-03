import { Routes } from '@angular/router';
import {LoginComponent} from "./features/public/login/login.component";
import {HomeComponent} from "./features/private/home/home.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'home', component: HomeComponent },

  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
