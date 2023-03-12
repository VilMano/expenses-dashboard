const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('data', {
    categories: () => ["food","car","other"],
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // we can also expose variables, not just functions
  })