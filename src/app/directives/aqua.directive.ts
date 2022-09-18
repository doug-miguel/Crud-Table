import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appAqua]",
})
export class AquaDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#00ffff";
  }
}
