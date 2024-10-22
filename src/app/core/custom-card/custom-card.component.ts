import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css',
})
export class CustomCardComponent {
  @Input() cardItem = new CardItem();
}

class CardItem {
  name: string = '';
  description: string = '';
  value: number = 0;
  add: number = 0;
}
