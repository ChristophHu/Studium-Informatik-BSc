# 02 Erstes Programm

## Anwendung erstellen und testen

Das Kommando zum erstellen, erstellt den Workspace mit allen benötigten Angular-Dateien.

```bash
ng new <app-name>
```

Während der Erstellung werden Fragen zum verwendeten Style-System (ich verwende [SASS](https://sass-lang.com/)) und Routing (ähnlich dem Seitenwechsel bei HTML) gestellt.

Nach der Initialisierung kann der Ordner `app-name` mit Visual Studio, VS Code oder einer beliebigen anderen IDE geöffnet werden.

In der IDE oder per Terminal/CMD kann die Anwendung gleich nach dem Start getestet werden:

```bash
ng serve
```

Dabei wird die Anwendung lokal erstellt und unter [http://localhost:4200](http://localhost:4200) bereitgestellt.



## Erweiterte Projektstruktur

Wenn der Umgang mit Angular fortgeschritten ist, ein Entwurf bereits vorliegt und die Struktur der Anwendung bekannt/bewusst ist, kann eine erweiterte Projektstruktur verwendet werden, um mehr Übersicht zu erhalten:

```bash
# angular
ng new <project_name> --create-application=false

# cordova
cordova create <app_name> de.block-code.app "CordovaTestApp"

# application
cd <project>
ng g application <app_name>

# tailwind
cd projects/<app_name>
npm install -D tailwindcss postcss@latest autoprefixer@latest
npx tailwindcss init

# start
npm start
# oder
ng serve
```

Hierbei wird der Workspace ohne Anwendung erstellt, Cordova mit in die Grundstruktur aufgenommen, die Anwendung unter `/projects` erstellt und Tailwind CSS hinzugefügt.

Die Installation und Verwendung von Cordova ist nicht Teil dieser Reihe.

Anschließend wird in der `angular.json` folgende Veränderung vorgenommen:

```json
{
    "projects": {
        "application": {
            "architecture": {
               "build": {
                   "options": {
                       "outputPath": "www",
                       ...
                   },
                   ...
               },
               ...
            },
            ...
        },
        ...
    },
    ...
}
```

Somit wird das Ergebnis des Build in den Ordner `./www` abgelegt und Cordova kann direkt den Angular-Build verwenden.

Der Unterschied der Erstellung einer einfachen Angular-Anwendung und einer Anwendung mit erweiterter Projektstruktur, ist dem Workspace zu entnehmen.

