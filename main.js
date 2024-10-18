const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    fullscreen: true,         // Fullscreen to fit the screen
    frame: false,              // No window frame for a cleaner look
    transparent: true,         // Enable transparency
    alwaysOnTop: true,         // Keep the window on top
    hasShadow: false,          // Remove the shadow for better transparency
    webPreferences: {
      nodeIntegration: true,   // Enable Node.js within the app
    },
  });

  // Allow the window to ignore mouse events but still receive focus events
  win.setIgnoreMouseEvents(true, { forward: true });

  // Load the glow.html file with the animation
  win.loadFile(path.join(__dirname, 'glow.html'));

  // Optional: Open DevTools for debugging
  // win.webContents.openDevTools();
});
