import { Directive, ElementRef, HostListener, input, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{

  // @Input() inputBgColor: string = '';
  inputBgColor = input<string>("#09c"); // using signal
  inputColor = input<string>("white");

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngAfterViewInit(){ // ngOnInit
    // let myElement = this.el.nativeElement as HTMLElement;
    // myElement.style.backgroundColor = this.inputBgColor();
    // myElement.style.padding = '20px 15px';
    // myElement.style.borderRadius = '10px';
    // myElement.style.border = '2px solid #000';
 
    
    // better for security and browser compatibility
    this.renderer2.setStyle(this.el.nativeElement, "background-color", this.inputBgColor());
    this.renderer2.setStyle(this.el.nativeElement, "padding", '20px 15px');
    this.renderer2.setStyle(this.el.nativeElement, "border-radius", '10px');
    this.renderer2.setStyle(this.el.nativeElement, "radius", '2px solid #000');
 
  }

  @HostListener("click") onClick(){
    this.el.nativeElement.style.display = 'none';
  }
  @HostListener("mouseenter") onMouseEnter(){
    this.renderer2.setStyle(this.el.nativeElement, "background-color", 'red');
    this.renderer2.setStyle(this.el.nativeElement, "color", this.inputColor());
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.renderer2.setStyle(this.el.nativeElement, "background-color", this.inputBgColor());
    this.renderer2.setStyle(this.el.nativeElement, "padding", '20px 15px');
    this.renderer2.setStyle(this.el.nativeElement, "border-radius", '10px');
    this.renderer2.setStyle(this.el.nativeElement, "radius", '2px solid #000');
  }
}
