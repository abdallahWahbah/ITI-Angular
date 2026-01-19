import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input({required: true}) name: string = ''; // "{required: true}" "if" you wanted to make it required
  @Output() facultyEventFire: EventEmitter<string> = new EventEmitter();

  @ContentChild("hamada") hamadaElement!: ElementRef; // to access element passed by content-projection "from about component"
  @ViewChild("internalElement") internalElement!: ElementRef; // to access element of the current component "alert"

  sayHello(){
    console.log(this.hamadaElement.nativeElement);
    console.log(this.internalElement.nativeElement);
  }

  showFaculty(){
    this.facultyEventFire.emit("faculty of engineering");
  }
}
