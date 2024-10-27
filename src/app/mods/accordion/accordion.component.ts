import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items:any = [];
  openItemIndex = 0;

  onClick(index: number) {
    if (index === this.openItemIndex) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = index;
    }
  }
}
