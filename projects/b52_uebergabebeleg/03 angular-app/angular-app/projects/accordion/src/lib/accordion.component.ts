import { CommonModule } from '@angular/common'
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core'

import { animate, state, style, transition, trigger } from '@angular/animations'
import { map, merge, of } from 'rxjs'
import { memoize } from 'lodash-es'
import { AccordionItem } from './directives/accordion-item.directive'

@Component({
  selector: 'accordion',
  standalone: true,
  imports: [
    CommonModule,
    AccordionItem
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({ height: '*', opacity: 1, visibility: 'visible' })),
      state('collapsed', style({ height: '0px', opacity: 0, visibility: 'hidden' })),
      transition('expanded <=> collapsed', animate('200ms cubic-bezier(.37,1.04,.68,.98)')),
    ]),
  ]
})
export class AccordionComponent implements AfterViewInit {
  expanded = new Set<number>()
  /**
   * Decides if the single item will be open at once or not.
   * In collapsing mode, toggling one would collapse others
   */
  @Input() collapsing = false

  @ContentChildren(AccordionItem) items!: QueryList<AccordionItem>

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    merge(this.items.changes, of(this.items))
    .pipe(map(() => this.items.toArray()))
    .subscribe((items) => {
      items.forEach((item, index) => {
        if (item.expanded) {
          this.expanded.add(index)
        }
      })
      this.cdr.detectChanges()
    })
  }
  /**
   * Make the toggle function available to be called from
   * outside.
   * Memoize to prevent extra calls
   * @param index - index of the accordion item
   */
  getToggleState = memoize((index: number) => {
    return this.toggleState.bind(this, index)
  })

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index)
    } else {
      if (this.collapsing) {
        this.expanded.clear()
      }
      this.expanded.add(index)
    }
  }
}
