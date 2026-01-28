import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  private readonly route = inject(ActivatedRoute);
  
  ngOnInit(){
    this.route.paramMap.subscribe({
      next: param => {
        console.log(param.get('id'));
      }
    })
  }
}
