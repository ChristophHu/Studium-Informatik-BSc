# Github Commands

[TOC]



## Config

```bash
# config anzeigen
git config --global -e
```

```bash
# setzen von VS Code als Standard-Editor (u.A. für rebase)
git config --global core.editor "code --wait"
```



## Status

```bash
# Status aller getrackten Dateien
git status
# Anzeige aller vernachlässigten Dateien /Ordner
git status --ignored
```



## Bereinigung

### clean

<p style="color:tomato;">Achtung: Es werden Dateien aus dem Arbeitsverzeichnis entfernt, die nicht getrackt werden. Es gibt keine Möglichkeit diese wieder herzustellen.</p>

Jede Datei, die mit einem Suchmuster in der `.gitignore` oder anderen Ignore-Dateien übereinstimmt, wird nicht entfernt.

```bash
# alle nicht getrackten Dateien entfernen
git clean
# dry-run
# um vorher zu schauen, was entfernt werden soll, kann das flag --dry-run genutzt werden
git clean -d -n
# entfernen aller Dateien, die von einem Build erzeugt werden
git clean -n -d -x
```



## Branch

### erstellen

```bash
# branches auflisten
git branch

# branch erzeugen
git branch <feature_name>

# branch wechseln
git checkout <feature_name>
```

### zum Repository hinzufügen

```bash
# branch zum repository hinzufügen
git push origin <feature_branch>
```

### löschen

```bash
# branch löschen (der branch kann erst nach dem mergen gelöscht werden)
git branch -D <feature_branch>
```

### zusammenführen

```bash
# in den branch master wechseln, den arbeitsbereich anbinden und anschließend den redundanten Nebenzweig löschen
git checkout <main>

# vereinigt den feature-branch in den aktuellen branch
git merge <feature_branch>

# löscht den feature-branch
git branch -d <feature_branch>
```



## Commits

### erstellen

```bash
git commit -m "<commit_message>"
```

### zusammenfassen

```bash
# zwei commits zusammenfassen
git rebase -i HEAD~3

pick 55e54e4 mod func 1
pick c55afd6 version 1.1 in function
pick cd490b9 version 1.2

# Rebase 511cbea..cd490b9 onto 511cbea
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.

# das entfernen eines commits löscht diesen
pick 55e54e4 mod func 1
squash c55afd6 version 1.1 in function
squash cd490b9 version 1.2
# ESC und :w und :q um das commit im Editor zu speichern

git log
```

### löschen

```bash
```



## Reset

### Commit zurücksetzen

```bash
# zurücksetzen des git commit, Änderungen verbleiben im working-tree
git reset HEAD^ --soft

# zurücksetzen des git add und git commit, Änderungen verbleiben im working-tree
git reset HEAD^ --mixed

# es wird alles zum letzten Commit zurückgesetzt
git reset HEAD^ --hard

# zurücksetzen eines Commit, welcher bereits gepusht wurde
git revert -n <sha>
```



## Stash

### Änderungen zurückhalten

```bash
# aktualisierungen zurückhalten
git stash
# stash-liste anzeigen
git stash list
```

### Änderungen nachträglich übernehmen

```bash
# den letzten stash übernehmen
git stash apply
# einen stash aus der 'git stash list' übernehmen
git stash apply 'stash@{2}'
```

### Stash entfernen

```bash
# einen stash aus der 'git stash list' entfernen
git stash drop 'stash@{0}'
```

### Branch aus Stash erzeugen

```bash
git stash branch <branch_name>
```

