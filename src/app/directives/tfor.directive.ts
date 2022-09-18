import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[Tfor]",
})
export class TforDirective implements OnInit {
  @Input("TforFor") strings: string[] | undefined;

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let string of this.strings ? this.strings : "") {
      this.view.createEmbeddedView(this.template, { $implicit: string });
    }
  }
}
