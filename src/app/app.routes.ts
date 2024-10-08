import { Routes } from '@angular/router';
import {LoginComponent} from "./features/public/login/login.component";
import {HomeComponent} from "./features/private/home/home.component";
import {DefaultLayoutComponent} from "./core/default-layout/default-layout.component";
import {CharacterListComponent} from "./features/private/character-list/character-list.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'', component: DefaultLayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'characters', component: CharacterListComponent}
    ]},

  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
