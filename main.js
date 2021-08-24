 const electron = require('electron');


 //The app module, which controls your application's event lifecycle.
 const app = electron.app;
 //The BrowserWindow module, which creates and manages application windows.
 const BrowserWindow = electron.BrowserWindow;

 //Then, add a createWindow() function that loads index.html into a new BrowserWindow instance.
 function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreference :{
          nodeIntegration:true // desktop application will enable in node
      }
    })
    win.maximize();
    win.loadFile('index.html')
    
  }

  //Next, call this createWindow() function to open your window.

/*In Electron, browser windows can only be created after the app module's ready event is fired. 
You can wait for this event by using the app.whenReady() API. 
Call createWindow() after whenReady() resolves its Promise.
*/

  app.whenReady().then(createWindow);
