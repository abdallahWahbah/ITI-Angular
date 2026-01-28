import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from './custom-pipe/truncate.pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.scss'
})
export class PipesDemoComponent {
  
  // Strings
  name = 'abdallah wahbah';
  message = 'Angular Pipes Are Powerful';

  // Numbers
  price = 1234.567;
  percentage = 0.85;

  // Dates
  today = new Date();

  // Objects & arrays
  user = {
    name: 'Abdallah',
    role: 'Frontend Developer',
    active: true
  };

  users = ['Ali', 'Sara', 'Omar', 'Mona'];
}
