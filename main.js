const { app, ipcMain, BrowserWindow } = require('electron');
const getSomeFiles = require('./src/js/main/getSomeFiles');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 1360, height: 800 });
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');
  // mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

ipcMain.on('getFileContents', function(event, arg) {
  getSomeFiles.getContents(arg, function(data) {
    event.sender.send('getFileContents', data);
  });
});

ipcMain.on('getDirectoryContents', function(event, arg) {
  getSomeFiles.getDirectoryContents(arg, function(data) {
    event.sender.send('getDirectoryContents', data);
  })
});
