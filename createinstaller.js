const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
.then(createWindowsInstaller)
.catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})

function getInstallerConfig () {
  console.log('Creating Windows Installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'Eleos-win32-x64/'),
    authors: 'The Zclassic Team',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'Eleos.exe',
    setupExe: 'Eleos.exe',
    setupIcon: path.join(rootPath, 'assets', 'icons', 'zcl.ico'),
    loadingGif: path.join(rootPath, 'assets', 'icons', 'zcl-loading.gif')
  })
}
