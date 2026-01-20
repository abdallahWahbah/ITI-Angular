import { afterNextRender, Component, inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [HighlightDirective], // custom directive
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation: ViewEncapsulation.None // to make the styles of this component global
})
export class AboutComponent {
  
  // all lifecycle methods run on server & browser
  // if you tried to use localStorage at ngOnInit, it will give error cause the server doesn't have a local storage (SSR)

  // solution 3
  private readonly Id = inject(PLATFORM_ID);

  constructor(){
    // solution 2 >>>> Angular 17 >> new lifecycle >>> AfterNextRender(the same as AfterViewInit (but not running on server)
    afterNextRender(() => { // only works on browser
      window.alert('hello');
    })
  }

  ngOnInit(){ 
    // Solution 1
    if(typeof localStorage !== "undefined") { // we are in the browser (not on server)
      localStorage.setItem("key", "value");
    }

    // solution 3
    if(isPlatformBrowser(this.Id)) { // in browser
      console.log('hello');
    }
  }
}
