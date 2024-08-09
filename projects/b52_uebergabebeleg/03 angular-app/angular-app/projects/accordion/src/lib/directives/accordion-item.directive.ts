import { ContentChild, Directive, Input } from '@angular/core';
import { AccordionContent } from './accordion-content.directive';
import { AccordionTitle } from './accordion-title.directive';
import { AccordionHeader } from './accordion-header.directive';

@Directive({
  selector: 'accordion-item',
  standalone: true
})
export class AccordionItem {
  @Input() title = ""
  @Input() disabled = false
  @Input() expanded = false

  @ContentChild(AccordionContent) content: AccordionContent | undefined
  @ContentChild(AccordionTitle) customTitle: AccordionTitle | undefined
  @ContentChild(AccordionHeader) customHeader: AccordionHeader | undefined
}
