import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {routes} from "../../../app.routes";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private  router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.router.navigate(['/home']).then(r => console.log(r));
  }

}
