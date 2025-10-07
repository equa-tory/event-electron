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