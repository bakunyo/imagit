const { app, BrowserWindow } = require('electron');
const ROOT_PATH = `file://${__dirname}`;

app.on("ready", e => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
});

app.on("window-all-closed", e => {
  app.quit();
});

const ipcMain = require('electron').ipcMain;

ipcMain.on('click-button', (sender, v) => {
  console.log(v);
});
