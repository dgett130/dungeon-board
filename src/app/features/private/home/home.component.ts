import { Component } from '@angular/core';
import {CharacterCardComponent} from "../character-card/character-card.component";
import {HeaderComponent} from "../../../core/header/header.component";
import {FooterComponent} from "../../../core/footer/footer.component";
import {CustomCardComponent} from "../../../core/custom-card/custom-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterCardComponent,
    HeaderComponent,
    FooterComponent,
    CustomCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
