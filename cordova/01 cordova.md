# Cordova

[TOC]

## Vorbereitung

### Installation

```bash
npm install -g cordova
```

### Projekt erstellen

```bash
cordova create test-app
cordova create test-app de.test.app "CordovaTestApp"
```

### Plattform wählen

```bash
cd test-app
cordova platform add browser
```

### Anwendung ausführen

```bash
cordova run browser
```

```bash
cordova build android --release --buildConfig=build.json
```



## Angular

### Angular Anwendung erstellen

[How to wrap an Angular app with Apache Cordova | by Elia Palme | Medium](https://medium.com/@EliaPalme/how-to-wrap-an-angular-app-with-apache-cordova-909024a25d79)

Nach der Initialisierung der Cordova-App kann eine Angular-Anwendung aufgesetzt werden. Dabei sollten beide in eigenständigen Ordnern (mit eigenständigen Abhängigkeiten) gehalten werden.

### Anwendung build

Das Angular-Build ist dann im Ordner `CordovaMobileApp/www` zu hinterlegen

```bash
ng build --prod --base-href . --output-path ../CordovaMobileApp/www/

ng build --output-path dist/www/
```

### Anwendung überprüfen

Im Ordner `CordovaMobileApp/www` wurde die Angular-Anwendung hinterlegt. Dort liegt auch die ausführbare `index.html`. Zur korrekten Ausführung durch Cordova, muss sich in dieser zum Ende hin der folgende Eintrag befinden:

```html
<script type="text/javascript" src="cordova.js"></script>
```

Als Beispiel kann auch einfach eine Cordova-TestApp erstellt werden.

```bash
cordova plugin list
```



## Android

```bash
// on: Failed to fetch platform cordova-android@^10.1.2 
cordova platform rm android && cordova platform add android
cordova platform ls
npm -g update cordova
npm cache clean --force

cordova platform add android
// config.xml - manifest entfernen
cordova build android
cordova emulate android

// bei gestartetem Android Studio
cordova run android --list
```



## Android Studio

[cordova.apache.org](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#java-development-kit-jdk)

### Windows

1. Installation von Android Studio,
2. Android SDK hinzufügen,
3. Java Vers. 8.0 x64 JDK von [www.openlogic.com](https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=All&field_operating_system_target_id=All&field_architecture_target_id=All&field_java_package_target_id=All&page=1) laden und installieren,
4. Systemvariable JAVA_HOME setzen auf: `C:\Program Files (x86)\OpenJDK\jdk-8.0.262.10-hotspot\`
5. Die Systemvariablen `ANDROID_HOME` und `ANDROID_SDK_ROOT` werden ebenfalls unter den Systemvariablen mit dem Pfad `C:\Users\christoph\AppData\Local\Android\Sdk` erstellt.
5. Wurde Gradle nicht im Android Studio installiert, kann dies separat erfolgen.

   * Gradle kann einfach unter https://gradle.org/releases/ geladen werden.

   * Unter `C:\gradle-7.3.3` kann Gradle dann abgelegt werden
   * Zuletzt muss Gradle noch in den *Systemvariablen* (unterer Teil) hinterlegt werden
   * "GRADLE_HOME" unter `C:\Gradle\gradle-7.3.3\bin`
   * durch `gradle -v` kann dieses getestet werden

Anzeige aller angesteckten Devices

```bash
adb devices
```

Zur Laufzeit kann im Chrome Browser durch `chrome://inspect#devices`
