const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // renderer will call backend REST endpoints directly
});
