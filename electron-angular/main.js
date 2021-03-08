const {Notification, BrowserWindow, Menu, app} = require('electron');

const url = require('url');
const path = require('path');

let mainWindow;
let newMovieWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({width: 1280, height: 720});
  mainWindow.loadFile('dist/electron-angular/index.html');
  /* mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/electron-angular/index.html'),
      protocol: 'file',
      slashes: true,
    }),
  ); */

  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);
  mainWindow.on('closed', () => {
    app.quit();
  });
}

function showNotification() {
  const notification = {
    title: '¡Videoclub iniciado!',
    body: '¡Bienvenido a tu videoclub favorito!',
  };
  new Notification(notification).show();
}

//app.on('ready', createMainWindow);
app.whenReady().then(createMainWindow).then(showNotification);

function createNewMovieWindow() {
  newMovieWindow = new BrowserWindow({
    width: 500,
    height: 330,
    title: 'Añade una nueva película',
  });
  newMovieWindow.setMenu(null);
  newMovieWindow.webContents.openDevTools();

  newMovieWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'src/app/pages/add-movies.component.html'),
      protocol: '',
      slashes: true,
    }),
  );
  newMovieWindow.on('closed', () => {
    newMovieWindow = null;
  });
}

//Menu Template
const templateMenu = [
  {
    label: 'Admin',
    submenu: [
      {
        label: 'Nueva Película',
        accelerator: 'Ctrl+N',
        click() {
          createNewMovieWindow();
        },
      },
      {
        label: 'Salir',
        accelerator: process.platform === 'darwin' ? 'command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: 'DevTools',
    submenu: [
      {
        label: 'Mostrar/Ocultar DevTools',
        accelerator: process.platform === 'darwin' ? 'command+D' : 'Ctrl+D',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: 'reload',
      },
    ],
  },
];

if (process.platform === 'darwin') {
  templateMenu.unshift({
    label: app.getName(),
  });
}
