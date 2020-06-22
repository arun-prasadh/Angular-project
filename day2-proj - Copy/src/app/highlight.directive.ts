import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  
 @Input('appHighlight') highlightColor: string = "yellow";
 
  constructor(private elementRef:ElementRef) { 
    // elementRef provides you access to Host Element
   // this.elementRef.nativeElement.style.backgroundColor="green";
  }
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor=this.highlightColor;
    this.elementRef.nativeElement.style.color="blue";
  }
  @HostListener('click') clickHandler(e){
    this.elementRef.nativeElement.style.backgroundColor="lightgreen";
  }
  @HostListener('mouseenter') mouseEnter(e){
    this.elementRef.nativeElement.style.backgroundColor="lightgrey";
  }
  @HostListener('mouseleave') mouseExit(e){
    this.elementRef.nativeElement.style.backgroundColor=this.highlightColor;
  }

}
