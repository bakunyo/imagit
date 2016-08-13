const { app, BrowserWindow, dialog } = require('electron');
const ROOT_PATH = `file://${__dirname}`;
const dirPath = require("path");
const ipcMain = require('electron').ipcMain;

app.on("ready", e => {
  const mainWindow = new BrowserWindow({ width: 1500, height: 1000 });

  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
});

app.on("window-all-closed", e => {
  app.quit();
});

