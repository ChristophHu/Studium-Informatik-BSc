# Typescript

## NodeJS
Node.js ist eine JavaScript-Laufzeitumgebung, die auf [Chromes V8 JavaScript-Engine](https://v8.dev/) basiert. Diese kann einfach unter [nodejs.org](nodejs.org) heruntergeladen werden. Unter Linux kann es einfach per CLI installiert werden:

```bash
sudo apt install nodejs
```

```bash
node -v
npm -v
```

Nach der Installation kann durch das Kommando die aktuell installierte Version angezeigt werden. Ob NPM installiert ist, kann über das gleiche Kommando ermittelt werden.

## Node Package Manager - NPM
NPM ermöglicht die Freigabe von Code in der Form eines Paketes.

### Installation
```bash
npm install npm@latest -g
```

Durch dieses Kommando wird die aktuellste Version von NPM global installiert.

### Update
```bash
npm cache clean -f
npm install -g n
sudo n stable
sudo n latest
```

### Packages
Auf der Seite [www.npmjs.com](www.npmjs.com) können alle freigegebenen Pakete eingesehen werden.

## Typescript
### VS Code
Genutzt werden VS Code mit den Extensions `Live Server`, `Mithril Emmet`,...

### Vorbereitung
```bash
npm init -y
npm install @types/node typescript -D # alternativ: npm i @types/node typescript
npx tsc --init

npx tsc <dateiname.ts>
```

### Ausführen
```bash
npx tsc
```

## Tailwind CSS
[https://cdnjs.com/](https://cdnjs.com/)
Suchen nach Tailwind CSS und den Link auswählen. Die Version 2.2.19 sollte genutzt werden. Mit einem Klick auf `</>` - Copy-Link-Tag wird der Link kopiert. Dieser wird in der `index.html` im `<head>` eingefügt.
```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
Beispiele: [https://tailwindui.com/components/preview](https://tailwindui.com/components/preview)

## Angular

### Installation
Angular wird wie die meisten NPM Pakete mit dem folgenden Kommando installiert. Dieses kommt gleich mit einem ganzen CLI (Command Line Interface).
```bash
npm install -g @angular/cli
```

### Uninstall
```bash
npm uninstall -g @angular/cli
npm cache clean --force
```

