# Accordion

## Use
```html
<accordion [collapsing]="collapsing">
  <accordion-item title="Super simple Accordion" [expanded]="true">
    <ng-template accordionContent>
      <div class="p-4">
        A simple and customizable accordion component made with
        functionalities provided by angular without having to use any 3rd
        party libraries. Ideal when you want custom basic accordion.
      </div>
    </ng-template>
  </accordion-item>
  <accordion-item>
    <ng-template accordionHeader let-toggle="toggle">
      <div class="flex items-center justify-between px-4 h-12 bg-purple-200">
        <p> Custom Header <span class="text-xs text-gray-700">(with custom toggle button)</span>
        </p>
        <div class="flex space-x-2">
          <button (click)="toggle()">Toggle</button>
        </div>
      </div>
    </ng-template>
    <ng-template accordionContent>
        <div class="p-4">
          This is a <strong>complete custom header</strong> implementation. The
          whole header section can be customized to you liking. Toggle method
          will be exposed which can be used to open/close the section.
        </div>
    </ng-template>
  </accordion-item>
  <accordion-item [expanded]="true">
    <ng-template accordionTitle>
      <div class="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" width="20" height="20">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm2 0A10.003 10.003 0 0 1 21.95 11H13V2.05z"/>
        </svg>
        <p>Custom Title</p>
      </div>
    </ng-template>
    <ng-template accordionContent>
        <div class="p-4">
          This is a simple implementation where the
          <strong>title part is custom</strong>. The header design and the
          button remains the same. This is best when you have to make small
          changes to title.
        </div>
    </ng-template>
  </accordion-item>
  <accordion-item title="Disabled" [disabled]="true">
    <ng-template accordionContent>
      Test 3
    </ng-template>
  </accordion-item>
</accordion>
```

```typescript
collapsing = false;
```