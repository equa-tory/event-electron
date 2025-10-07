# event-electron
event example in npm (node js) for college

---

## Installation on your own guide
`npm init -y`

`npm install --save-dev electron`

Add this \/ to package.json:
```
"scripts": {
  "start": "electron ."
}
```
and check if your main file name same as `"main": "index.js'` line.

---

## main/index .js file
this file imports electron, creates window 400x300 that loads 'index.html' file for visual,
then ipcMain (event handler) waits for event called 'button-click' with arguments and sends message to console.
```
const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

// Обработка события из renderer
ipcMain.on('button-click', (event, arg) => {
  console.log('Кнопка нажата! Аргумент:', arg);
});

app.whenReady().then(createWindow);
```

## index.html (front end file, visual, design)

this is a default html file with button that has id "myButton" and label "Press me",
also this html has js script inside that imports ipcRenderer for sending event 'button-click' with argument 'Hello from button!' and also makes alert box in html with text 'Event was send to main process'

```
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Electron Event Test</title>
</head>
<body>
  <h2>Тест кнопки</h2>
  <button id="myButton">Нажми меня</button>

  <script>
    const { ipcRenderer } = require('electron');

    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
      ipcRenderer.send('button-click', 'Привет из кнопки!');
      alert('Событие отправлено в main process');
    });
  </script>
</body>
</html>
```
