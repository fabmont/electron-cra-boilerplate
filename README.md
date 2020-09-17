![Electron CRA Boilerplate Banner](https://github.com/fabmont/electron-cra-boilerplate/blob/master/media/repo-banner.png)

Boilerplate for creating **Electron** based apps using **create-react-app**.

## Quick Features

- Electron preconfigured ⚡
- Create-React-App with styled-components 💅
- Build scripts for macOS, Windows and Linux deploy ⛏
- ESLint & Prettier preconfigured 💎

## Getting started

1. Cloning the repository in the directory of your choice:

> git clone https://github.com/fabmont/electron-cra-boilerplate.git name-of-your-project

2. Open `package.json` file and change the following properties with your project info:

- name
- productName
- author (name, email, url)
- build (appId, productName, copyright and category under `mac` and `linux`)

3. Now, you need to install the dependencies running the command below:

   yarn install // or npm install

4. You are ready to go. Run `yarn dev` or `npm dev` to start the local server 🤘

## Building your app for production

This boilerplate ships four scripts to help you bundling your app to production. The following exemples are using `yarn` but you can also use `npm`.

- `yarn electron:build`: will start the build process for creating **macOS**, **Linux** and **Windows** binaries.
- `yarn electron:build-windows`: will start the build process for creating only **Windows** binaries.
- `yarn electron:build-linux`: will start the build process for creating only **Linux** binaries.
- `yarn electron:build-mac`: will start the build process for creating only **macOS** binaries.

PS: this scripts doesn't change any specific target output (e.g. `.deb` for Linux, `.exe` for Windows and `.dmg` for Mac), check the **electron-builder** docs in the next section to know about default targets and how to customize them.

## Build reference

To build your application for production, this boilerplate uses **electron-builder** package. To create build script that you need to customize such as output app format and so on, check their [documentation](https://www.electron.build/cli).
