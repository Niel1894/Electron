const { ipcRenderer } = require('electron')

const folder = document.querySelector('#folder');

ipcRenderer.on('folder:new',(e, newFolder) =>{
    const newFileTemplate = `
    <div class="col-xs-4-md-auto p-1 w-30">
        <div class="center">
            <img src="../img/file.png" alt="Carpeta" height="42" width="42">
            <br>
            <label for="labelFolderCreated">${newFolder.name}</label>
        </div>
        <div>
           <img src="../img/delete.png" alt="X" height="25" width="25">
        </div>
    </div>
    `;
    folder.innerHTML += newFileTemplate;
})