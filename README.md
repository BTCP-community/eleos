# Eleos

Eleos is a wallet for zero-knowledge cryptocurrencies written in Electron. 

  - Compatible with Windows, MacOS, and Linux
  - No Third-Party Java Dependencies Required
  - Supports Zclassic

![Screenshot](https://i.imgur.com/hyvrCpX.jpg)

### First Time Run
Note: First time run it may take awhile to load since ~1GB of cryptographic data must be downloaded first.

##### Windows and MacOS
The simplest way to get started on Windows or Mac OS is to [download and run the latest standlone application](https://github.com/michaelotis/eleos/releases). No need for installation!

##### Linux
Note: Eleos requires that the compiled wallets are named zcld-linux and are saved into the eleos directory.
You can compile yourself or get the file here : https://github.com/michaelotis/eleos/releases/tag/1.0

Get the source
```
git clone https://github.com/michaelotis/eleos.git eleos
```
cd ~/Builds/eleos
```
npm install 
```
Copy the Zclassic/Zcash wallet daemon into the Eleos directory (name the binary 'zcld-linux')
```
cp ~/Builds/zclassic/src/zcashd ~/Builds/eleos/zcld-linux
```
Start Eleos
```
npm start
```


### Supported Wallets

Eleos is designed as to be a full-node wallet for all Zcash forks. The wallet.dat for each cryptocurrency is stored in the directories below.

| Support | Status | Windows Location | MacOS Location |
| ------ | ------ | ------ | ------ |
| Zclassic | Fully supported | %APPDATA%/Zclassic | ~/Library/Application Support/Zclassic |


### Donation
If you consider to make a donation, here are our addresses :
ZCL : t1SHPhCr6TScktD9Ndm16VEjYJsMoR2DUBv

### License
Common Public Attribution License (CPAL-1.0)
Originally Created by Josh Yabut for ZenCash
Reworked by Michael Otis for Zclassic/Bitcoin Private

Maintained by The Zclassic Team

