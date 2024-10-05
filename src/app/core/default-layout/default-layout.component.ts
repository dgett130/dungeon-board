import { Component } from '@angular/core';
import {CharacterCardComponent} from "../../features/private/character-card/character-card.component";
import {CustomCardComponent} from "../custom-card/custom-card.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    CharacterCardComponent,
    CustomCardComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {

}
