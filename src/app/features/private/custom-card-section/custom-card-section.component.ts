import { Component } from '@angular/core';
import { CustomCardComponent } from '../../../core/custom-card/custom-card.component';

@Component({
  selector: 'app-custom-card-section',
  standalone: true,
  imports: [CustomCardComponent],
  templateUrl: './custom-card-section.component.html',
  styleUrl: './custom-card-section.component.css',
})
export class CustomCardSectionComponent {}
