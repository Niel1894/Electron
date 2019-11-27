const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const url = require('url');
const path = require('path')

let mainWindows
let newFolderWindows
let newFileWindows

app.on('ready', () => {
    mainWindows = new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        title: "Sistema Operativo",
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    });

    mainWindows.loadURL(url.format({
        pathname: path.join(__dirname,'views/index.html'),
        protocol:'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
    
    mainWindows.on('closed', () =>{
        app.quit();
    })
});

function createNewFolderWindows(){
    newFolderWindows = new BrowserWindow({
        width: 400,
        height: 200,
        title: 'Crear Nueva Carpeta',
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    });
    newFolderWindows.setMenu(null)

    newFolderWindows.loadURL(url.format({
        pathname: path.join(__dirname,'views/new-folder.html'),
        protocol:'file',
        slashes: true
    }));

    newFolderWindows.on('closed',() =>{
        newFolderWindows = null; 
    })
}

function createNewFileWindows(){
    newFileWindows = new BrowserWindow({
        width: 400,
        height: 600,
        title: 'Crear Nuevo Archivo',
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    });
    newFileWindows.setMenu(null)

    newFileWindows.loadURL(url.format({
        pathname: path.join(__dirname,'views/new-file.html'),
        protocol:'file',
        slashes: true
    }));

    newFileWindows.on('closed',() =>{
        newFileWindows = null; 
    })
}

ipcMain.on('folder:new', (e,newFile) => {
    mainWindows.webContents.send('folder:new', newFile)  
    newFolderWindows.close();
});

const templateMenu = [
    {
        label:'Carpeta',
        submenu: [
            {
                label: 'Nueva Carpeta',
            accelerator:'Ctrl+N',
            click() {
                createNewFolderWindows()
                }
            },
             
        ]
    },
    {
        label:'Archivo',
        submenu: [
            {
                label: 'Nuevo Archivo',
            accelerator:'Ctrl+F',
            click() {
                createNewFileWindows()
                }
            } 
        ]
    }
]