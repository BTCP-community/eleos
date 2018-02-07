# Eleos

Eleos is a wallet for zero-knowledge cryptocurrencies written in Electron (JS).

  - Compatible with Windows, MacOS, and Linux
  - Supports Z > Z, Z > T, T > Z, and T > T transactions
  - Supports encrypted memos
  - No Java dependencies required, unlike the Swing client
  - This version only currently supports Zclassic

![Screenshot](https://i.imgur.com/hyvrCpX.jpg)

### Please be patient on first run!
The program may take a while to load, since ~1GB of cryptographic data must be downloaded first.

##### Windows and MacOS
The simplest way to get started on Windows or Mac OS is to [download and run the latest standalone application](https://github.com/BTCP-community/eleos/releases). No need for installation!

##### Linux
Note: Eleos requires that zcashd from your coin be renamed to zcld-linux, and copied into the main eleos directory.
You can compile it yourself or get the file here: https://github.com/BTCP-community/eleos/releases

Get the source:
```
git clone https://github.com/BTCP-community/eleos.git
```
```
cd eleos
```
```
npm install
```
Copy the Zclassic/Zcash wallet daemon into the Eleos directory (name the binary 'zcld-linux'):
```
cp ~/Z/zclassic/src/zcashd ~/Z/eleos/zcld-linux
```
Start Eleos:
```
npm start
```


### Supported Coins
Eleos is designed as to be a full-node wallet for all Zcash forks. The wallet.dat for each cryptocurrency is stored in the directories below.

| Support | Status | Windows Location | MacOS Location |
| ------ | ------ | ------ | ------ |
| Zclassic | Fully supported | %APPDATA%/Zclassic | ~/Library/Application Support/Zclassic |


### Donations
For all donations to the Zclassic team:

ZCL (Z): zcfocnwd5EuQb5SkECzyKqaWAizXA9pfBqd6i9BRXcUYXFxCTRcrkU7Sc9nfFs3Te1FneGEkiSsL1mWtFW4dDH9mnpC2nSt  
ZCL (T): t1SHPhCr6TScktD9Ndm16VEjYJsMoR2DUBv  
(Send us a memo at our Z address! :wink:)

BTC: 12AizDy1LTEd9DytvZbV3tPf5eVb5Sgt1k

### Building Releases
For Windows, you must have WINE installed.

```
npm install
```
```
npm run package-win
```
```
npm run create-installer-win
```
or
```
npm run package-mac
```
```
npm run create-installer-mac
```

### License
Common Public Attribution License (CPAL-1.0)  
Originally Created by Josh Yabut for ZenCash  
Reworked by Michael Otis for Zclassic/Bitcoin Private

Maintained by The Zclassic Team
