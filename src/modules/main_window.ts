import { BrowserWindow, Tray, app } from 'electron';
import application from './application';

class MainWindow {
  public window: BrowserWindow;
  public tray: Tray;
  constructor(tray: Tray) {
    this.tray = tray;
    this.window = new BrowserWindow({
      resizable: false,
      skipTaskbar: true,
      maximizable: false,
      fullscreenable: false,
      frame: false,
      movable: false,
      show: false,
      width: 350,
      height: 250,
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: true
      }
    });

    this.window.loadURL(`file://${app.getAppPath()}/index.html`);
    this.window.on('close', this.onClose.bind(this));
  }

  onClose(event: Electron.Event) {
    if(!application.isQuiting) {
      event.preventDefault();
      this.window.hide();
    }
  }

  show() {
    const windowBounds = this.window.getBounds();
    const trayBounds = this.tray.getBounds();
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
    const y = Math.round(trayBounds.y + trayBounds.height);
    this.window.setPosition(x, y, false);
    this.window.show();
  }

  isVisible() : boolean {
    return this.window.isVisible();
  }
}

export default MainWindow;
