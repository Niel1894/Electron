const { ipcRenderer } = require('electron')

const form = document.querySelector('#new-folder');
form.addEventListener('submit', e => {
    e.preventDefault();
    const nameFolder =  document.querySelector('#name').value;
    
    const newFolder = {
        name: nameFolder
    };

    ipcRenderer.send('folder:new', newFolder);

    
    

})