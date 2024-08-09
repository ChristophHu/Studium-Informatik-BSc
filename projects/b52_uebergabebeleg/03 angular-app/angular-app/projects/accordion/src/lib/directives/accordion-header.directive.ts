import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: "[accordionHeader]",
  standalone: true
})
export class AccordionHeader {
  constructor(public templateRef: TemplateRef<any>) {}
}