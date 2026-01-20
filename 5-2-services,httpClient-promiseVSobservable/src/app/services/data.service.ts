import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  friends: string[] = ["Abdallah", "Mahmoud", "Abdelbary", "Abdallah", "Wahbah"];

  constructor() { }

  sayHello(){
    console.log("Hello");
  }
}
