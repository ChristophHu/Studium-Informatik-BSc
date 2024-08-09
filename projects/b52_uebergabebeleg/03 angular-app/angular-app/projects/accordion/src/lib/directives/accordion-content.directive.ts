import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: "[accordionContent]",
  standalone: true
})
export class AccordionContent {
  constructor(public templateRef: TemplateRef<any>) {}
}