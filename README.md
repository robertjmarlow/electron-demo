# Electron Demo

Hi there! This is a very simple demo of what [Electron](http://electron.atom.io/) can do. There are several branches:

1. `Hello-Electron`: This sets up a development server, which allows for hot-reloading. This also displays a "Hello, Electron!" inside of Electron. Neat!
1. `Add-IPC`: IPC is the glue by which the "frontend" and the "backend" communicate. A retrieval of all files in the current directory of the Electron application is implemented to demonstrate this. jQuery is added, too because everything needs jQuery.
1. `Deploy-App`: Electron comes with powerful deploy tools which can deploy an Electron application as an executable file across Linux, OS X, and any modern version of Windows. This will set up webpack and `electron-packager` to deploy an Electron application.
1. `Add-Tooling`: Add [esLint](http://eslint.org/) using [Airbnb's popular ruleset](https://github.com/airbnb/javascript) and [extensions for React](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules).

# Building

Clone this repo.
```shell
git clone https://github.com/robertjmarlow/electron-demo
```
Change working directory.
```shell
cd electron-demo
```
Check out a branch.
```shell
git checkout Hello-Electron
```
Install the node modules.
```shell
npm install
```
(optional but recommended) Install Electron globally.
```shell
npm install -g electron
```
Run the webpack dev server.
```shell
npm run dev
```
(in another command window) Run the application!
```shell
electron .
```
# Code quality enforcement
## esLint
Run esLint.
```shell
npm run lint
```
esLint will get angry if it finds any problems.
```shell
npm run lint

> electron-demo@1.0.0 lint C:\git\robertjmarlow\electron-demo
> eslint -c ./.eslintrc.js main.js ./src/js/** ./src/jsx/*


C:\git\robertjmarlow\electron-demo\src\jsx\hello.jsx
  3:22  error  Trailing spaces not allowed  no-trailing-spaces

✖ 1 problem (1 error, 0 warnings)
```
## Unit tests
# Glossary
* `renderer process`: The "frontend", or the V8 process. Think of it like a Chrome window.
* `main process`: The "backend, or the node process.
* `webpack`: Used by this project to put all the js and css into one big javascript file. Other tools that can do the same thing include [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com/).
* `esLint`: Static code analyzer that enforces good programming practices and code styling.
