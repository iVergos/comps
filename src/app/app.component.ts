import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ElementsHomeComponent } from "./elements/elements-home/elements-home.component";
import { CollectionsHomeComponent } from "./collections/collections-home/collections-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,
    //  ElementsHomeComponent, CollectionsHomeComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
