import { Component } from '@angular/core';
import { CustomCardComponent } from '../../../core/custom-card/custom-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-card-section',
  standalone: true,
  imports: [CustomCardComponent, CommonModule],
  templateUrl: './custom-card-section.component.html',
  styleUrl: './custom-card-section.component.css',
})
export class CustomCardSectionComponent {
  cardItemList: CardItem[] = [
    {
      name: 'Destrezza',
      description: 'Descrizione boh qualcosa',
      value: 12,
      add: 1,
    },
  ];
}

class CardItem {
  name: string = '';
  description: string = '';
  value: number = 0;
  add: number = 0;
}
