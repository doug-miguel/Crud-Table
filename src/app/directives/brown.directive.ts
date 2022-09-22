import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBrown]",
})
export class BrownDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#F2E800";
  }
}
