# Create an Extension

## Replace the contents of this readme with information on the usage of this extension and any other additional details

## Quick Start

* ```yarn install```
* ```yarn run dev```
* http://localhost:9000

## Commands

Some basic commands are included to make development easier. These commands can be found and edited in the **scripts** portion of **package.json**

* ```yarn run build```
    * Calls ```npx webpack``` to bundle js starting from **index.js**
    * The bundled **main.js** file is output to **/dist**. This file is already included in **index.html** 
    * [Learn more about bundling with webpack](https://webpack.js.org/guides/getting-started/#creating-a-bundle)
* ```yarn run dev-server```
    * Calls ```webpack-dev-server``` to start a server in the **/public** directory at http://localhost:9000 and watch for code changes in order to automatically re-bundle 
    * [Learn more about webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
* ```yarn run dev```
    * Calls ```yarn run build``` and ```yarn run dev-server```
* ```yarn run start```
    * Calls ```node src/scripts/server.js```
* ```yarn run test```
