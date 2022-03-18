const { app, BrowserWindow, Menu } = require('electron');
const applicationMenu = require('./application-menu');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(applicationMenu)
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})