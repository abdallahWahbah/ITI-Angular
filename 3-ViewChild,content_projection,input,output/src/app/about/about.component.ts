import { Component } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-about',
  imports: [AlertComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  userName: string = "Abdallah Wahbah";
  faculty: string = ''; // data from child (alert) to parent

  // printFacultyToScreen(data: string){
  //   this.faculty = data;
  // }
}
