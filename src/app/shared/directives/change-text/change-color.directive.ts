import { Directive, ElementRef, HostListener, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeTextDirective {
  color: string = "red";

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.changeColor("red");
  }

  @HostListener('click') foo(){
    if(this.color == "red") {
      this.color = "green";
      this.changeColor(this.color);
    } else {
      this.color = "red";
      this.changeColor(this.color)
    }
  }

  changeColor(color: string){
    this.renderer.setStyle(this.element.nativeElement, 'color', color);
  }

}
