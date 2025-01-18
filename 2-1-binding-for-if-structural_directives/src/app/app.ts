import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  age: number = 25;
  name: string = "Abdallah";
  role: "admin" | "user" | "visitor" = "admin"; // type literal
  objForLoop = [{id: 1, name: "Abdo"}, {id: 2, name: "mahmoud"}, {id: 3, name: "wahbah"}];
  inputText: string = '';
  serverCreated: boolean = false;

  classStyle: object = {
    'text-centering': this.age > 20,
    'blue-color': this.name === 'Abdallah'
  }
}
