# 04 Cordova-App

## Installieren
Voraussetzung dafü: npm installiert (NodeJS).
```bash
npm install -g cordova
```

## Cordova-App erstellen
```bash
# cordova
# Achtung Cordova kann nicht in den bestehenden neuen Ordner integriert werden
cordova create <project_name> de.block-code.app "CordovaTestApp"
```

Mögliche Fehler: "Die Datei "C:\Users\chris\AppData\Roaming\npm\cordova.ps1" kann nicht geladen werden..."
- Diese Datei einfach löschen: C:\Users\chris\AppData\Roaming\npm\cordova.ps1

## App im Browser ausführen
```bash
cd test-app
cordova platform add browser

cordova run browser
```

## App auf dem Endgerät ausführen
```bash
cordova platform add android

cordova run android
```

### SDK, JDK und Gradle

Installation von Android Studio,

Android SDK hinzufügen,

Java Vers. 8.0 x64 JDK von www.openlogic.com laden und installieren,

Systemvariable JAVA_HOME setzen auf: C:\Program Files (x86)\OpenJDK\jdk-8.0.262.10-hotspot\

Die Systemvariablen ANDROID_HOME und ANDROID_SDK_ROOT werden ebenfalls unter den Systemvariablen mit dem Pfad C:\Users\christoph\AppData\Local\Android\Sdk erstellt.

Wurde Gradle nicht im Android Studio installiert, kann dies separat erfolgen.

Gradle kann einfach unter https://gradle.org/releases/ geladen werden.

Unter C:\gradle-7.3.3 kann Gradle dann abgelegt werden

Zuletzt muss Gradle noch in den Systemumgebungsvariablen (unterer Teil) hinterlegt werden

"GRADLE_HOME" unter C:\Gradle\gradle-7.3.3\bin

durch gradle -v kann dieses getestet werden

Anzeige aller angesteckten Devices
```bash
# nzeige aller angesteckten Devices
adb devices
```