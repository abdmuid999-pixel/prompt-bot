const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  if (process.env.NODE_ENV === 'production'){
    win.loadFile(path.join(__dirname, 'renderer', 'dist', 'index.html'));
  } else {
    win.loadURL('http://localhost:5173');
  }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', ()=>{ if (process.platform !== 'darwin') app.quit(); });
