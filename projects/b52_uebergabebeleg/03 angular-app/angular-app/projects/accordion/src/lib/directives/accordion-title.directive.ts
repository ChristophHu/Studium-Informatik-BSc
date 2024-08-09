import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: "[accordionTitle]",
  standalone: true
})
export class AccordionTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}