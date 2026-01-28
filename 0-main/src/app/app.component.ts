import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { PipesDemoComponent } from "./pipes-demo/pipes-demo.component";

@Component({
  selector: 'app-root',
  imports: [FooterComponent, PipesDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '0-main';
}
