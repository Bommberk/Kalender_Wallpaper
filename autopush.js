const chokidar = require('chokidar');
const { exec } = require('child_process');

// Überwache den Ordner "mein-ordner" auf Änderungen, Löschungen und Hinzufügungen von Dateien
const watcher = chokidar.watch('kalender', {
  persistent: true // Halte den Watcher aktiv, auch nachdem das Skript beendet wurde
});

// Reagiere auf Änderungen
watcher.on('change', (path) => {
  console.log(`Datei geändert: ${path}`);
  executeGitCommands(path,"Datei Geändert");
});

// Reagiere auf Löschungen
watcher.on('unlink', (path) => {
  console.log(`Datei gelöscht: ${path}`);
  executeGitCommands(path,"Datei gelöscht");
});

// Reagiere auf Hinzufügungen
watcher.on('add', (path) => {
  console.log(`Datei hinzugefügt: ${path}`);
  executeGitCommands(path,"Datei hinzugefügt");
});

// Falls Fehler auftreten
watcher.on('error', (error) => {
  console.error(`Fehler beim Überwachen: ${error}`);
});

// Funktion zum Ausführen der Git-Befehle
function executeGitCommands(path,stage){
    console.log("Befehl zum Automatischen Pushen wird ausgeführt");
    exec(`git add --a && git commit -m "AutoSave(${stage} | ${path})" && git push origin autoPush`,(error, stdout, stderr) => {
      if(error){
          console.error(`Fehler beim Ausführen von Git-Befehlen: ${error}`);
          return;
      }
      console.log(`Git-Befehle erfolgreich ausgeführt: ${stdout}`);
  });
}

// Schreibe eine Nachricht, um zu zeigen, dass das Skript gestartet wurde
console.log('Überwache Dateiänderungen im Ordner "kalender"...');

// Halte das Skript am Laufen
process.stdin.resume();