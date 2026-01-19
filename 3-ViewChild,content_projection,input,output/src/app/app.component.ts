import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  imports: [AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '0-main';
}
