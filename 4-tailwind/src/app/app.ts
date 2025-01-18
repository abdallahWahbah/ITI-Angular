import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Home],
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
