import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { DividerComponent } from "../../shared/divider/divider.component";
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ModalComponent, DividerComponent, CommonModule, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'An orange tastes like an orange'},
    { title: 'What color is the cat?', content: 'The cat is an orange color'}
  ]
  
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
