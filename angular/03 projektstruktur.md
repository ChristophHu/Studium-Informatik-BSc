# 03 Projektstruktur

## Aufbau

```terminal
Projekt
├── documentation
└── src
    ├── app
  	│	├── modules		---auch Unterteilung nach weiteren Modulen---
  	│	│	├── components
  	│ 	├── landing
  	│ 	├── layouts
  	│ 	├── pages
  	│ 	├── modules-routing.module.ts
  	│ 	└── modules.module.ts
  	│	│
  	│	├── core
  	│	│	├── authentication
  	│	│	├── footer
  	│	│	├── guards
  	│	│	├── models
  	│	│	├── navbar
  	│	│	├── services
  	│	│	├── sidebar
  	│	│	└── core.module.ts
  	│	│
  	│	├── config
  	│	│
  	│	├── shared
  	│	│	├── components
  	│	│	├── directives
  	│	│	├── pipes
  	│	│	├── validators
  	│	│	└── shared.module.ts
  	│	│
  	│	├── app-routing.module.ts
  	│	├── app.component.ts
  	│	└── app.module.ts
  	│
  	└── assets
    	└── styles.sass
```

## Erstellung

| Befehl                                      | Beschreibung                              |
| ------------------------------------------- | ----------------------------------------- |
| `mkdir 'name'`                              | Erstellen eines Ordners                   |
| `ng g m 'name'` , `ng g m 'name' --routing` | Erstellen eines Modules mit einem Router  |
| `ng g c 'name' --dry-run`                   | Anzeige von Veränderungen ohne Erstellung |

Nachdem der Ordner `modules` inkl. `module` und `routing` erstellt wurde können die Pages/Components `home` und `user` hinzugefügt werden.

Automatisch wird in die Datei `modules.module.ts` die Components hinterlegt.

Die `modules.module.ts` muss nun noch in die `app.module.ts` importiert werden.