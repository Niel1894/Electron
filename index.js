'use strict'

const {app, BrowserWindow} = require('electron');

console.dir(app);

app.on('before-quit', () => {
    console.log('Saliendo...');
    
})

app.on('ready', () =>{
    let win = new BrowserWindow({
         width: 800, 
         height: 600, 
         center: true, 
         title: "Explorador de Archivos",
         maximizable: false
         });
    win.on('closed', () => {
        win = null;
        app.quit();
    })
})

