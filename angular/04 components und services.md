# 04 Components and Services

## Components

Angular Anwendungen bestehen aus Komponenten. Diese können als Grundlage der Modularisierung angesehen werden.

### Generate

```typescript
ng generate component 'component-name'
ng g c 'component-name'
```

Es wird daraufhin die Komponente mit den Dateien `*.component.css`, `*.component.html`,`*.component.ts` und `*.component.spec.ts` erstellt.

Den Dateiendungen nach, teilt sich eine Komponente in den zugehörigen Style (`*.css`), das View (`*.html`), die Logik (`*.ts`) und den Test (`*.spec.ts`).

### Options

Bei der Generierung von Komponenten können verschiedene Optionen angegeben werden:

| Option          | Beschreibung                                                 | Default-Wert |
| --------------- | ------------------------------------------------------------ | ------------ |
| flat            | Erstellung direkt im aktuellen Ordner                        | false        |
| inline-template | Der HTML-Template wird direkt in der `*.ts`-Datei erzeugt.   | false        |
| inline-style    | Das Styling wird ebenfalls direkt in der `*.ts`-Datei integriert. | false        |
| skipTests       | Testdatei nicht erzeugen                                     | false        |

Beispiel:

```bash
ng g c component-name --flat -it -is --skipTests=true
```

&nbsp;

## Verbindung von Logik und Darstellung

### Interpolation

Durch eine Interpolation oder Stringinterpolation wird ein Strings im Html-View ausgegeben. Dieser muss als Variable in der Typescript-Datei deklariert sein. Darüber hinaus können auch Ausdrücke inform einer Funktion oder Berechnung verwandt werden.

```html
<div>{{ variableName }}</div>
```

Das Fragezeichen (?) wird als safe-navigation-Operator interpretiert. Ist das Objekt nicht vorhanden, wird auch nichts ausgegeben. So können null-Checks vermieden werden

### Property-Binding

Property-Binding ist der Zugriff auf ein Attribut eines Element im Template.

```html
<img [property]="variableName"/>
```

Dabei kann ein Ergebnis einer Funktion, einer Variable oder sonstiges Element übergeben werden.

#### CSS-Klassen setzen

```html
<div [style.font-size.px]="calculateFontSize()">{{ Size }}</div>
```

### Event-Binding

Durch Event-Binding wird auf Events von Komponenten reagiert. Diese werden dann direkt -inline- oder in der zuständigen Typescript-Datei abgearbeitet. Allgemein schaut das wie folgt aus:

```typescript
(eventName)="auszuführendes Statement"
```

Soll auf ein Klick eines Buttons reagiert werden, so erhält das Element den Event und die auszuführende Funktion:

```html
<button (click)="alert("Button wurde geklickt.")"></button>
```

Neben dem alert kann auch eine Funkton in der `app.component.ts` ausgeführt werden.

### Input-Bindings

Komponenten können genutzt werden um Wiederverwendbarkeit herzustellen. Dazu zählt auch das Ergebnisse von Komponenten von außen abgefragt oder Inhalte von außen gesetzt werden können.

Die Übergabe erfolgt dann in der Aufnahme der Komponente:

```html
<app-tp [name]="'String'"></app-tp>
```

Um Inhalte von außen setzen zu können, muss in der Komponente ein Input-Decorator existieren:

```typescript
export class TPComponent {
	@Input() name: string;
}
```

Die Variable `name` muss korrekt angesprochen werden. Alternativ dazu kann auch ein Alias verwendet werden.

```typescript
export class TPComponent implements OnInit {
	@Input('aliasName') name: string;
}
```

### Output-Binding

Das Output-Binding hingegen übergibt Daten von untergeordneten zu übergeordneten Komponenten. Oder kurz: Andere Komponenten über Datenänderungen informieren.

```typescript
export class TPComponent {
  @Output() changeEvent: EventEmitter<string>;
  constructor() {
		this.changeEvent = new EventEmitter<string>();
  }
  emitChange() {
		this.changeEvent.emit("newValue");
  }
}
```

Wie beim Input wird beim Output der `@Output`-Decorator genutzt. Der Event vom Typen EventEmitter nimmt einen String auf. Durch die Funktion `emit()` wird dann der Inhalt festgelegt. Dabei muss jedoch auch das Output importiert werden.

```html
<!-- Mutter-Komponente -->
<button (clicked)="variable = $event">Bitte Klicken</button>
```

Durch den Klick in der Kind-Komponente wird in dieser eine Funktion ausgeführt, die per EventEmitter und Output direkt in den Aufruf der Komponente in der Mutter-Komponente übertragen wird und dort als 'clicked' abgefangen werden kann.

Weiteres Beispiel:

```html
<!-- Kind -->
<input [(ngModel)]="kindValue" (change)="onChangeValue()">
```

```typescript
kindValue: number = 0
@Output() outputName = new EventEmitter()

onChangeValue() {
  this.outputName.emit(this.kindValue)
}
```

```html
<!-- Mutter-Komponente -->
<app-kind (outputName)="mutterValue = $event"></app-kind>
```

```typescript
mutterValue: number = 0
```

Wie gehabt muss in der `app.component.ts` das `FormsModule` importiert und aufgenommen werden.

### Input- und Output-Binding

Neben dem separaten Input- und Output-Binding können diese auch ähnlich dem `[(ngModel)]` als Two-Way-Binding genutzt werden. So wird eine Veränderung jeweils zwischen Mutter- und Kind-Komponente zugespielt, abhängig vom Ursprung der Veränderung. Kurz: Wenn eine Veränderung durch die Kind-Komponente vorgenommen wird, so so wird dies an die Mutter-Komponente mit dem Output emitted. Erfolgt die Veränderung durch die Mutter-Komponente selbst, wird ähnlich dem Input-Binding die Kind-Kompoinente informiert.

```typescript
<!-- Mutter-Komponente -->
<div class="overlay" [ngClass]="{'active': isSidebarActive}" (click)="isSidebarActive = !isSidebarActive"></div>
<app-sidebar [(sidebarActive)]="isSidebarActive"></app-sidebar>
```

Durch einen Klick auf das `Overlay` wird die Variable `isSidebarActive` geändert. Anschließend wird per Two-Way-Binding die Kind-Komponente `sidebarActive` angestoßen.

```typescript
// Kind-Komponente
isActive = false
@Output() sidebarActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>()
@Input() set sidebarActive(value: boolean) {
    this.isActive = value
}

toggle() {
    this.isActive = !this.isActive
    this.sidebarActiveChange.emit(this.isActive)
}
```

Das Input ist als Funktion aufgesetzt und verändert den Aktivitätsstatus `isActive`. Dies erfolgt bei jeder Veränderung von Außen. Die interne Funktion `toggle()` emitted hingegen eine Veränderung aus der Kind-Komponente heraus an die Mutter-Komponente.

<font style="color:red">Achtung:</font>

Die Bezeichner sidebarActive und sidebarActive<u>Change</u> sind bedacht benannt. Beide Kommunizieren mit `[(sidebarActive)]`.

#### HostBinding

Durch den Decorator `@HostBinding` kann auch eine Directive genutzt werden:

```html
<p appHighlightText>Hervorgehobener Text!</p>
```

```typescript
// directive.ts
export class DirectiveNameDirective {
  @HostBinding('style.backgroundColor') color = 'green'
}
```

#### HostListener

Soll auf das Element zugegriffen werden, auf dem das Directive sitzt, so nutzt man HostListener.

```typescript
@HostListener('mouseenter') mouseenter() {
  this.color = 'blue'
}

@HostListener('mouseleave') mouseleave() {
  this.color = 'red'
}
```

Darüber hinaus können die Farben auch als Variablen gesetzt werden.

#### Host-Binding und Host-Listener

```html
<h2>HostBindung und HostListener</h2>
<label for="email">Email: </label>
<br>
<input type="text" appLowerCase>
```

```typescript
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowerCase]'
})

export class LowerCaseDirective {
  @HostBinding() value = 'Test';
  @HostListener('change', ['$event'])
  
  onChange($event) {
		this.value = $event.target.value.toLowerCase();
  }
}
```

#### Kanonisches Host-Binding

```typescript
@Directive({
  selector: '[appLowerCase]',
  host: {
		'(change)': 'onChange($event)',
		'[value]': 'value'
  }
})

export class LowerCaseCanonicalDirective {
  value = "";
  onChange($event) {
		this.value = $event.target.value.toLowerCase();
  }
}
```

&nbsp;

### Two-Way-Data-Binding per ngModel-Direktive

Das Two-Way-Data-Binding ist eine Mischung aus Property- und Event-Binding. Durch eine Eingabe wird ein Change-Event ausgelöst.

```html
<input [(ngModel)]="var"/>
<input [(ngModel)]="var"/>
```

Das Element `<input>` kann durch das Two-Way-Binding über die Variable `var` belegt werden, in umgekehrter Form wird die Variable jedoch auch per Eingabe verändert.

In diesem Fall muss jedoch die Direktive als Teil des FormsModule importiert werden. Im `@NgModule` muss daher folgende Anpassung vorgenommen werden:

```typescript
import { FormsModule } from '@angular/forms';
import: [
    BrowserModule, 
    FormsModule
]
```

&nbsp;

## Services

### Generate

```typescript
ng generate service 'service-name'
ng g s 'service-name'
```

Es wird daraufhin die Komponente mit den Dateien `*.component.css`, `*.component.html`,`*.component.ts` und `*.component.spec.ts` erstellt.

Eine Komponente teilt sich in Style (`*.css`), das View (`*.html`), die Logik (`*.ts`) und den Test (`*.spec.ts`). Ein Service übernimmt eine bestimmte Aufgabe und wird von der Komponente getrennt gehalten und einigen/vielen/allen Komponenten freigegeben.

Als Beispiel kann hier die Kommunikation mit dem Backend, der Speicherung von Daten im lokalen Speicher oder die Nutzung einer Schnittstelle genannt werden.