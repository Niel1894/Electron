const { ipcRenderer } = require('electron')

const folder = document.querySelector('#folder');

ipcRenderer.on('folder:new',(e, newFolder) =>{
    console.log(newFolder);
    
})