# Debug-Mode

Das Debug-Mode beinhaltet nur einen Button, der dem `Body` die Klasse `.debug` hinzufügt. Zusätzlich ist ein Style hinterlegt, welches per `ViewEncapsulation.None` auf den gesammten Shadowdom ausgerollt wird.
Jedes Element mit der Klasse `.debug-item-hide` wird abhängig von der Klasse `.debug` dann angezeigt oder versteckt.

```sass
:host {
  .debug-item-hide {
    display: none;
  }
  .debug & {
    .debug-item-hide {
      display: block;
    }
  }
}
```

oder 

```sass
body        
    &.debug .debug-item-hide
        @apply block

    .debug-item-hide
        @apply hidden
```