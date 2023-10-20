import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColorExemple]'
})
export class HoverColorExempleDirective {

  constructor(private el: ElementRef, private renderer : Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroudColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'purple');
  }
}

// using of directive 

// <div myDirective>
//    Hover over me!
// </div>
