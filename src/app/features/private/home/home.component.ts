import { Component } from '@angular/core';
import {CharacterCardComponent} from "../character-card/character-card.component";
import {HeaderComponent} from "../../../core/header/header.component";
import {FooterComponent} from "../../../core/footer/footer.component";
import {CustomCardComponent} from "../../../core/custom-card/custom-card.component";
import {CustomCardSectionComponent} from "../custom-card-section/custom-card-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterCardComponent,
    HeaderComponent,
    FooterComponent,
    CustomCardComponent,
    CustomCardSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
