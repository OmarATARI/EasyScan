# EasyScan

**A food scanner made by Omar REGUADI and Omar ATARI**

4 screens are available : HomeScreen, CameraScreen, ProductScreen and HistoryScreen 

Packages:
- React Navigation v5
- BarCodeScanner

Installation and usage
Be sure, you have installed all dependencies and applications to run React Native Expo project on your computer.


## Getting started

- Clone this repository :
```
git clone https://github.com/OmarATARI/FoodScanner.git
```

- Install packages :
```
npm install
```

- When installation is complete :
```
expo start
```
- Scan Qrcode with expo application to run application in developpment.

## Generating apk build

According to https://docs.expo.io/distribution/building-standalone-apps. Follow next steps to generate apk (android),
- Update app.json file with mandatory easyscan fields
- Run
```
expo build:android
```
- Build fill in queue, wait building. See https://expo.io/turtle-status.
- To save keystore credentials:
```
expo fetch:android:keystore
```
- For more information about the link to download apk.
```
expo build:status
```
- Current project build(wip) see https://expo.io/@ttedepaille/easy_scan.
- Current build link: https://expo.io/accounts/ttedepaille/builds/38eaa0f8-a763-4e6e-ac5e-77c32eb1a1fc
