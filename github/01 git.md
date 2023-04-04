# Github

Nach dem Kurs der HPI [https://open.hpi.de/courses/git2020](https://open.hpi.de/courses/git2020)

[TOC]

# Woche 1

## Zusammenfassung
Was ist Git, Repository, Versionsverwaltung, fetch, init oder branch?

## Versionsverwaltung
Eine Datei unterliegt ggf. starken Veränderungen. Jede Veränderung führt zu einem neuen Zustand. Eine Version beschreibt den Inhalt einer Datei (Zustand) zu einem bestimmten Zeitpunkt. Durch die Versionskontrolle kann durch die einzelnen gespeicherten Zustände der Datei gesprungen werden.
Es existieren dabei 3 verschiedene Formen der Versionskontrolle.
1. Lokale Versionskontrolle: Version Control System (VCS) - auf einem Computer werden alle Patch-Sets gespeichert,
2. Zentralisierte Versionskontrolle: Centralised Version Control System (CVCS) - Clients nutzen einen Server um die Version zu sichern (Zugriffskontrolle vorausgesetzt) - und 
3. Verteilte Versionskontrolle: Destributed Version Control System (DVCS) - alle Clients kopieren die Datei und alle Patch-Sets.

## Entstehungsgeschichte
Bei der nicht linearen Entwicklung kann zeitgleich an einem Projekt gearbeitet werden.

## 5 - Grundprinzipien von Git
1. Snapshot, statt unterschiede (es werden keine Deltas gespeichert, sondern Git speichert alle veränderten Daten neu ab),
2. fast jede Operation ist lokal (alle Daten existieren lokal, eine Verbindung zum Server ist nicht erforderlich),
3. Integrität (es kann nichts verloren gehen, es werden Prüfsummen gebildet),
4. Git fügt Daten hinzu (gelöschte Daten bleiben erhalten, Versionen bleibe ja erhalten),
5. die drei Zustände.

### Die drei Zustände
Eine Datei kann drei Zustände erhalten. "Modified", "Staged" und "Commited". Im "modified"-Zustand wurde eine Datei verändert. "Staged" bedeutet, dass die modifizierte Datei zur Versionskontrolle hinzugefügt aber noch nicht übertragen ("commited") wurde.
Dazu werden drei Stages (Working Directory, Staging Area, Repository) genutzt. Soll eine Bearbeitung erfolgen, muss ein Projekt aus dem Repository durch einen "checkout" herausgenommen werden. Nach der Bearbeitung ("modify") kann das Projekt dann in die Staging Area ge-"add"-ed werden. Anschlieﬂend muss es nur noch "commited" werden.

## Installation
Git kann auf Win, Mac und Linux installiert werden.

### Linux
> `apt-get install git` - Installation per Paketverwaltungstool apt installieren

### Mac
Auf der Seite von Git [https://git-scm.com/download/win](https://git-scm.com/download/win) kann Git heruntergeladen werden.

> `git --version` - Version von Git anzeigen

### Windows
Auf der Seite von Git [https://git-scm.com/download/win](https://git-scm.com/download/win) kann Git heruntergeladen werden.

### Git-Config
Git kann einfach an eigene Bedürfnisse angepasst werden. Dazu nutzt man die Config. Eine Config kann sich im Repository befinden. Alternativ existiert eine globale Config.
> `git config --list` - Einstellungen anzeigen lassen
> `git config --global user.name 'userName'` - global Usernamen setzen
> `git config --global user.email 'user@mail.com'` - global Useremail setzen

In der Config selbst kann man dann alle Einstellungen einsehen.

## Die Arbeit mit Git

### Git init, git add, git commit
> `git init` - aktuellen Ordner als Git-Repository deklarieren
> `git add .` - alle Dateien/Ordner dem Stage-Area hinzufügen (vormerken)
> `git commit` - erst hier werden alle Dateien/Ordner zum lokalen Repository hinzugefügt
> `git commit -m 'message'` - Commit mit Bezeichnung versehen

> `git remove *.jpg` - entfernen aller JPEG-Dateien aus dem Repository
> `git rm *.jpg`

![Repository](https://i.redd.it/nm1w0gnf2zh11.png)

### Git remote, git clone
> `git remote` - anzeige der Verbindung
> `git remote add 'alias' 'url'`
> `git remote rename 'alias' 'neuerAlias'` - Repository umbenennen
> `git remote rm 'neuerAlias'` - Repository entfernen

Der Alias ist dabei lokal.

Ein online Repository kann auch von online kopiert werden.

> `git clone 'url' 'alias'` - Kopie eines Repository der URL unter den Aliasnamen

### Git push, git fetch, git pull
> `git push 'origin/branch'` - lokales Repository online stellen
> `git fetch` - online Repository in den eigenen Pfad dazu ziehen

Nach dem Fetch ist das lokale eigene Repository und das online (veränderte) Repository vorhanden. Diese müssen beide noch abgeglichen werden.

> `git merge`

> `git pull` - ist eine Verbindung von Fetch und Merge, bei der das online (veränderte Repo) das lokale einfach überschreibt

### Praktischer Ablauf
> `git init`
> `git add .`
> `git status`
> `git rm -f geheimeDatei.txt` - force remove der geheimen Datei
> `git commit -m "repo init"` - hinzufügen zum lokalen Repository
> `git remote add origin https://github.com/christophhu/project1.git` - lokales Repository zum online Repository verbinden
> `git push -u origin master` - lokales Repository zum online Repository hinzufügen

# Woche 2

## Zusammenfassung
Datenmodell, Branch, Merge, Mergekonflikte beheben, Versionen zurückspringen

## Datenmodell
Es wurde bereits Add und Commit vorgestellt. Dabei werden im Hintergrund sogenannte Blobs und Commitobjekte erzeugt.
![Add und Commit](https://shafiul.github.io/gitbook/assets/images/figure/objects-example.png)

Wichtig ist, dass Dateien/ veränderte Dateien eine Prüfsumme erhalten. Diese werden in einem Add-Tree gespeichert, der ebenfalls eine Prüfsumme erhält. Ein Commit enthält dann die Prüffsumme des Add-Tree sowie weiterer Meta-Daten.
![Snapshot](data:image/png;base64,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)

## Branch
Branch bildet bei Git die Parallelität von Entwicklungen ab. So können neben der Hauptlinie weitere Entwicklung durchgeführt und an gegebener Stelle zusammengeführt (merch) werden. Der Branch kann als Zeiger auf ein Commit verstanden werden. Haben wir bereits ein Commit durchgeführt und führen ein weiteres Commit durch, springt der Branch-Zeiger einfach auf das neue Commit.
Der Master-Branch ist der Standard-Branch.

> `git branch <neuerBranchname>` - legt einen neuen Branchnamen an, wechselt aber nicht auf diesen

Der HEAD ist der Zeiger, der auf den aktuellen Branch zeigt.

> `git checkout <neuerBranchname>` - HEAD auf einen anderen Branch bewegen

> `git checkout -b <neuerBranchname>` - anlegen eines neuen Branch und checkout auf diesen

Ein neuer Commit würde dann durch den neuen Branch durchgeführt werden.
Achtung: Wird zurück auf den Master-Branch gesprungen, wird im Arbeitsbereich auch nur der letzte Commit des Master abgebildet. Der neue Commit bleibt im lokalen Repository gespeichert, ist an der Stelle Working Direction jedoch nicht zu sehen.

## Merge
Ein Merge ist das zusammenführen von Branches. Der erste Branch (bei paralleler Entwicklung) der an den Master angefügt wird, wird selbst wieder zum Master.

> `git merge <neuerBranchname>` - merge des genannten Branchnamen auf den aktuellen Branch (der mit dem HEAD-Zeiger)

Wird ein Merge durchgeführt, welches ein älteren (Vorgänger-)Master nutzt, ist das kein Problem solang keine Parallele Entwicklung beeinträchtigt wird. Das Repository beinhaltet dann alle Veränderungen und wird zum neuen Master.

### Mergekonflikte
Soll ein Merge durchgeführt werden und in beiden Branches wurde eine Datei bearbeitet (mit unterschiedlichen Eingaben), kommt es zum Konflikt. Ein Merge ist nicht möglich und der Konflikt muss behoben werden.

> `git status`

Durch den Status wird bei dem Vorliegen beider Branches auf die Unstimmigkeit hingewiesen.
Die Inhalte müssen dann per Hand eingefügt werden.

## Versionsgeschichte

> `git log` - Ansicht der Versionsgeschichte

> `git log -p` - Anzeige einzelner Veränderungen

> `git log -2 --stat` - letzten 2 Einträge mit kurzer Statistik

## Korrigieren des Repository

> `git commit --amend` - ändern des letzten Commit (Commitmessage)

### Stage Area bearbeiten

Werden Dateien in das Staging Area hinzugefügt, können diese aus diesem auch wieder entfernt werden.

> `git checkout -- <file>` - entfernen einer Datei aus dem Stage

### Ältere Versionen widerherstellen

> `git reset HEAD~` - vorletzten Commit des aktuellen Branch (oder durch ~~ auf vorvorletzten Commit zurückspringen)

Durch dies wird der HEAD als auch Master-Branch zurückgesetzt.

> `git reset --mixed HEAD~` - Zurücksetzen von Branch und Stage

> `git reset --hard HEAD~` - Zurücksetzen von Branch, Stage und Working-Directory


### Open Source
Bei der Open Source handelt es sich um Software mit öffentlichen Zugang zum Quellcode. Dieser muss von Dritten einsehbar, nutzbar und veränderbar sein können.
Kriterien für Open Source sind des weiteren:

* öffentlich verfügbarer Quelltext,
* freie Umverteilung,
* mögliche Nutzung in allen Einsatzgebieten,
* technologie-unabhängige Modifizierung und Verbreitung,
* Gleichbehandlung aller Gruppen und Personen.

Zurückzuführen ist open Source auf die Do-it-yourself-Bewegung (50er), Hacker-Bewegung (60er und 70er) und die freie Software-Bewegung (80er).

Unfreie Software ist ein soziales Problem.

### Lizenzen
Bei Software handelt es sich um eine Art der Wertschöpfung, die mit Musik oder Kunst verglichen werden kann. Der Urheber bestimmt darüber, wie damit gearbeitet werden darf.
Ist eine ursprüngliche Software frei, darf ein darauf aufbauendes Produkt nicht kommerzialisiert werden. Auch bei Open Source existieren >50 verschiedene Lizenzen.

#### GPL (General Public License)
Freie Nutzung, Modifizierung und Weitergabe mit Copyleft. Diese Software darf nicht kommerzialisiert werden.

#### BSD (Berkley Software Distribution)
Freie Nutzung, Modifizierung und Weitergabe ohne Copyleft. Bei der Weitergabe darf diese Software kommerzialisiert werden.

#### MIT (Massachusetts Institut of Technology)
Diese entspricht der BSD. Darüber hinaus auch Closed Source Software (SW, bei der der Code nicht einsehbar sein muss).

Die genannte Software ist Konzernunabhängig. Die Qualitätssicherheit wird durch die Entwicklung durch/mit eine große Personenzahl gewährleistet. Dies führt zu individuellen Anpassbarkeit und Analyse.
Auf der anderen Seite kann durch Tivoisierung die Software zwar open Source sein, aber wird zum lesen eine bestimmte Software benötigt, die nicht frei erhältlich ist. Obfuskation ist die Unkenntlichmachung um das Verständnis zu erschweren.


## Organisation in Open Source Projekten
In Organisationen existieren Owner, Maintainer, Member und Author. Trägt man von außerhalb zu einem Repository bei, so ist man Contributor zu diesem.

### Semantic Versioning
Ein Release erhält eine Releasenummer bsw. 1.4.2. Diese teilt sich wie folgt auf:
1. Major Release (größere Änderungen),
4. Minor Release (neue Features) und
2. Patch Release (Bug fix).


## Issues und Features

Neben Fehlern/Bugs können Issues auch Ideen und Verbesserungen sein. Sie werden erstellt, um daran anzuknüpfen. Dazu werden bei einem Issue Titel und Beschreibung, Labels (zur Organisation), Meilensteine (zur Verknüpfung mit Releases/Deadlines) und Assignee (verantwortliche Person).
Mögliche Labels sind: "bug", "help wanted", "question", "invalid", "dependencies",...
Ein Issue kann open als auch closed sein. So können sie bearbeitet werden oder werden als abgeschlossen deklariert.

### Pull Request
Bei einem Pull Request geht es darum, den geschriebenen Code mit anderen Entwicklern zu diskutieren. So können Änderungsvorschläge gemacht oder der Code direkt kommentiert werden.
Wie bei einem Issue kann ein Pull Request als open oder closed gekennzeichnet werden. Ist dieser closed, so wurde er erfolgreich zum Branch gemerged.

Ziel ist es also ein Merge durchzuführen. Dabei können alle Commits angezeigt werden, durchgeführte Checks oder bearbeitete Dateien gesichtet werden.


## Mit Remotes arbeiten

...
